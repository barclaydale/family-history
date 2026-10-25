/* Shared data access for every page. The data itself is plain JS in public/data/*.js
   (window.FH.people / places / presence / stories / photos), loaded before this file. */
(function () {
  var FH = (window.FH = window.FH || {});

  FH.peopleById = {};
  FH.placesById = {};
  FH.storiesById = {};
  FH.photosById = {};
  (FH.people || []).forEach(function (p) { FH.peopleById[p.id] = p; });
  (FH.places || []).forEach(function (p) { FH.placesById[p.id] = p; });
  (FH.stories || []).forEach(function (s) { FH.storiesById[s.id] = s; });
  (FH.photos || []).forEach(function (p) { FH.photosById[p.id] = p; });

  FH.person = function (id) { return FH.peopleById[id] || null; };
  FH.place = function (id) { return FH.placesById[id] || null; };
  FH.story = function (id) { return FH.storiesById[id] || null; };
  FH.photo = function (id) { return FH.photosById[id] || null; };

  FH.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* "1864–1944", "b. 1937", "1963" — whatever the record actually supports. */
  FH.lifespan = function (p) {
    var b = p.birthLabel, d = p.deathLabel;
    if (b && d && d !== "living") return b + " – " + d;
    if (b && (!d || d === "living")) return "b. " + b;
    if (!b && d) return d === "living" ? "" : "d. " + String(d).replace(/^d\. /, "");
    return "";
  };

  FH.yearSpan = function (p) {
    if (p.birthYear && p.deathYear) return p.birthYear + "–" + p.deathYear;
    if (p.birthYear) return p.birthYear + "–";
    if (p.deathYear) return "–" + p.deathYear;
    return "";
  };

  FH.isLiving = function (p) { return !!p.birthYear && !p.deathYear; };

  /* ---------- relationships ---------- */
  FH.parents = function (p) { return (p.parentIds || []).map(FH.person).filter(Boolean); };
  FH.spouses = function (p) { return (p.spouseIds || []).map(FH.person).filter(Boolean); };
  FH.children = function (p) { return (p.childIds || []).map(FH.person).filter(Boolean); };

  FH.siblings = function (p) {
    if (!p.parentIds || !p.parentIds.length) return [];
    var seen = {}, out = [];
    p.parentIds.forEach(function (pid) {
      var parent = FH.person(pid);
      if (!parent) return;
      (parent.childIds || []).forEach(function (cid) {
        if (cid === p.id || seen[cid]) return;
        seen[cid] = 1;
        var sib = FH.person(cid);
        if (sib) out.push(sib);
      });
    });
    return out.sort(FH.byBirth);
  };

  FH.byBirth = function (a, b) {
    var ay = a.birthYear || 9999, by = b.birthYear || 9999;
    if (ay !== by) return ay - by;
    return a.name.localeCompare(b.name);
  };

  /* Everyone descending from a person, for the tree filter. */
  FH.descendants = function (id, acc) {
    acc = acc || {};
    var p = FH.person(id);
    if (!p) return acc;
    (p.childIds || []).forEach(function (cid) {
      if (acc[cid]) return;
      acc[cid] = 1;
      FH.descendants(cid, acc);
    });
    return acc;
  };

  /* ---------- places, stories, photos for a person ---------- */

  /* Many presence records cover a whole group over a whole span — "the family summered at
     Pewaukee 1902–1925" — which is true of the group but not of a child born in 1921. Clamp
     each record to the person's own lifespan so nobody is ever placed somewhere before they
     were born or after they died. Burials are the exception, and unknown dates don't clamp. */
  FH.clampToLife = function (pr, person) {
    if (!person) return null;
    var start = pr.startYear, end = pr.endYear;
    if (person.birthYear && start < person.birthYear) start = person.birthYear;
    if (person.deathYear && pr.kind !== "grave" && end > person.deathYear) end = person.deathYear;
    if (start > end) return null;
    return { placeId: pr.placeId, startYear: start, endYear: end, label: pr.label, kind: pr.kind };
  };

  FH.presenceFor = function (id) {
    var person = FH.person(id);
    return (FH.presence || [])
      .filter(function (pr) { return pr.personIds.indexOf(id) !== -1; })
      .map(function (pr) { return FH.clampToLife(pr, person); })
      .filter(Boolean)
      .sort(function (a, b) { return (a.startYear || 0) - (b.startYear || 0); });
  };

  /* True if this person was at this place in this year, lifespan included. */
  FH.presentIn = function (pr, personId, year) {
    var clamped = FH.clampToLife(pr, FH.person(personId));
    return !!clamped && year >= clamped.startYear && year <= clamped.endYear;
  };

  FH.storiesFor = function (p) { return (p.storyIds || []).map(FH.story).filter(Boolean); };

  /* Photos that name this person. */
  FH.photosFor = function (p) { return (p.photoIds || []).map(FH.photo).filter(Boolean); };

  /* Everything else pictured from their life: images attached to the stories they appear in,
     and images of the places the record puts them. Excludes the ones that already name them,
     so the two galleries never repeat a photo. These are "from their world", not "of them" —
     the person pages label them that way rather than implying they're in the frame. */
  FH.relatedPhotos = function (p) {
    var already = {};
    (p.photoIds || []).forEach(function (id) { already[id] = 1; });

    var places = {};
    FH.presenceFor(p.id).forEach(function (pr) { places[pr.placeId] = 1; });
    var stories = {};
    (p.storyIds || []).forEach(function (id) { stories[id] = 1; });

    return (FH.photos || []).filter(function (ph) {
      if (already[ph.id]) return false;
      return stories[ph.storyId] || (ph.placeId && places[ph.placeId]);
    });
  };

  FH.peopleInStory = function (s) { return (s.peopleIds || []).map(FH.person).filter(Boolean).sort(FH.byBirth); };

  /* ---------- links ---------- */
  FH.personHref = function (id) { return "person.html?id=" + encodeURIComponent(id); };
  FH.storyHref = function (id) { return "story.html?id=" + encodeURIComponent(id); };
  FH.mapHref = function (opts) {
    var q = [];
    if (opts && opts.person) q.push("person=" + encodeURIComponent(opts.person));
    if (opts && opts.year) q.push("year=" + encodeURIComponent(opts.year));
    if (opts && opts.place) q.push("place=" + encodeURIComponent(opts.place));
    return "map.html" + (q.length ? "?" + q.join("&") : "");
  };

  FH.personLink = function (p, opts) {
    if (!p) return "";
    var dates = opts && opts.dates === false ? "" : FH.yearSpan(p);
    return '<a class="person-link" href="' + FH.personHref(p.id) + '">' + FH.esc(p.name) + "</a>" +
      (dates ? ' <span class="dates">(' + FH.esc(dates) + ")</span>" : "");
  };

  FH.param = function (name) {
    return new URLSearchParams(location.search).get(name);
  };

  /* The full span the archive covers, used to bound the map timeline. */
  FH.timeRange = function () {
    var min = 9999, max = 0;
    (FH.presence || []).forEach(function (pr) {
      if (pr.startYear && pr.startYear < min) min = pr.startYear;
      if (pr.endYear && pr.endYear > max) max = pr.endYear;
    });
    return { min: min === 9999 ? 1789 : min, max: max || new Date().getFullYear() };
  };

  /* Thumbnail for a person: the first photo that names them. */
  FH.portrait = function (p) {
    var photos = FH.photosFor(p);
    return photos.length ? photos[0] : null;
  };
})();
