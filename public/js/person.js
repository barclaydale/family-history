/* A person's page: bio, the close-family snapshot (parents, siblings, spouses, children),
   the stories they appear in, the places the record puts them, and their photos. */
(function () {
  var FH = window.FH;

  function li(p, self) {
    return '<li' + (self ? ' class="self"' : "") + ">" + FH.personLink(p) + "</li>";
  }

  function group(label, items) {
    if (!items.length) return "";
    return '<div class="snap-group"><h4>' + FH.esc(label) + '</h4><ul class="snap-list">' +
      items.join("") + "</ul></div>";
  }

  function snapshot(p) {
    var parents = FH.parents(p).sort(FH.byBirth);
    var sibs = FH.siblings(p);
    var spouses = FH.spouses(p);
    var kids = FH.children(p).sort(FH.byBirth);

    var sibRow = sibs.map(function (s) { return li(s); });
    // show the person in birth order among their siblings
    var withSelf = sibs.concat([p]).sort(FH.byBirth).map(function (s) { return li(s, s.id === p.id); });

    var html = "";
    html += group("Parents", parents.map(function (x) { return li(x); }));
    html += group(sibs.length ? "Siblings" : "", sibs.length ? withSelf : []);
    html += group("Married", spouses.map(function (x) { return li(x); }));
    html += group("Children", kids.map(function (x) { return li(x); }));
    if (!html) html = '<p class="empty">No close relatives recorded.</p>';
    return html + (sibRow.length || kids.length || parents.length
      ? '<div class="snap-group" style="border-top:0;padding-top:10px"><a class="btn" href="index.html">See the whole tree</a></div>'
      : "");
  }

  function placesSection(p) {
    var rows = FH.presenceFor(p.id);
    if (!rows.length) return '<p class="empty">No places recorded for this person yet.</p>';
    return '<ul class="linklist">' + rows.map(function (pr) {
      var place = FH.place(pr.placeId);
      if (!place) return "";
      var yrs = pr.startYear === pr.endYear ? String(pr.startYear) : pr.startYear + "–" + pr.endYear;
      return '<li><div class="place-row"><span class="yrs">' + FH.esc(yrs) + "</span><span>" +
        '<a href="' + FH.mapHref({ person: p.id, year: pr.startYear, place: place.id }) + '">' +
        FH.esc(place.name) + "</a>" +
        (place.modern && place.modern !== place.name ? ' <span class="muted small">· ' + FH.esc(place.modern) + "</span>" : "") +
        '<span class="sub">' + FH.esc(pr.label) + (place.approx ? " · location approximate" : "") +
        "</span></span></div></li>";
    }).join("") + "</ul>";
  }

  function storiesSection(p) {
    var stories = FH.storiesFor(p).sort(function (a, b) { return (a.yearStart || 0) - (b.yearStart || 0); });
    if (!stories.length) return '<p class="empty">No stories reference this person yet.</p>';
    return '<ul class="linklist">' + stories.map(function (s) {
      return '<li><a class="title" href="' + FH.storyHref(s.id) + '">' + FH.esc(s.title) + "</a>" +
        ' <span class="dates story-years">' + FH.esc(s.years) + "</span>" +
        '<span class="sub">' + FH.esc(s.summary) + "</span></li>";
    }).join("") + "</ul>";
  }

  function gallery(photos, opts) {
    if (!photos.length) return "";
    return '<div class="gallery">' + photos.map(function (ph) {
      var where = opts && opts.context ? contextLine(ph) : "";
      return '<figure><a href="' + FH.esc(ph.src) + '" target="_blank" rel="noopener">' +
        '<img src="' + FH.esc(ph.src) + '" alt="' + FH.esc(ph.caption) + '" loading="lazy"></a>' +
        "<figcaption>" + FH.esc(ph.caption) +
        (ph.note ? ' <span class="muted">' + FH.esc(ph.note) + "</span>" : "") +
        where + "</figcaption></figure>";
    }).join("") + "</div>";
  }

  /* For the related gallery: say where the photo comes from, so it's clear this is
     context rather than a picture of the person. */
  function contextLine(ph) {
    var bits = [];
    var s = ph.storyId && FH.story(ph.storyId);
    if (s) bits.push('<a href="' + FH.storyHref(s.id) + '">' + FH.esc(s.title) + "</a>");
    var pl = ph.placeId && FH.place(ph.placeId);
    if (pl) bits.push(FH.esc(pl.name));
    if (!bits.length) return "";
    return '<span class="muted" style="display:block;margin-top:3px">' + bits.join(" · ") + "</span>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var id = FH.param("id");
    var p = FH.person(id);
    var main = document.getElementById("person-main");
    if (!p) {
      main.innerHTML = '<div class="wrap page-head"><h1>Not found</h1>' +
        '<p class="lede">No one by that id is in the record. <a href="index.html">Back to the family tree</a>.</p></div>';
      return;
    }

    document.title = p.name + " · Mueller Family History";
    var photos = FH.photosFor(p);
    var related = FH.relatedPhotos(p);
    var portrait = photos.length ? photos[0] : null;
    var gen = p.gen ? "Generation " + p.gen : "";
    var relation = p.relation === "household" ? "Household member, not a blood relation"
      : p.relation === "half-sibling" ? "Half-sibling line" : "";

    main.innerHTML =
      '<div class="wrap">' +
        '<div class="person-head">' +
          (portrait ? '<img class="portrait" src="' + FH.esc(portrait.src) + '" alt="' + FH.esc(portrait.caption) + '">' : "") +
          '<div class="head-text">' +
            '<p class="eyebrow">' + FH.esc(gen) + "</p>" +
            "<h1>" + FH.esc(p.name) + "</h1>" +
            (p.nickname ? '<p class="life">Known as “' + FH.esc(p.nickname) + "”</p>" : "") +
            '<p class="life">' + FH.esc(FH.lifespan(p) || "Dates not recorded") + "</p>" +
            '<div class="meta">' +
              (relation ? '<span class="chip">' + FH.esc(relation) + "</span>" : "") +
              (FH.isLiving(p) ? '<span class="chip">No death date recorded</span>' : "") +
              '<a class="chip accent" href="' + FH.mapHref({ person: p.id }) + '">Follow on the map →</a>' +
            "</div>" +
          "</div>" +
        "</div>" +
        '<hr class="rule-orn">' +
        '<div class="cols">' +
          "<div>" +
            '<div class="section">' +
              (p.note ? '<div class="note">' + FH.esc(p.note) + "</div>" : "") +
              '<div class="prose">' +
                (p.bio ? p.bio.split("\n").map(function (par) { return "<p>" + FH.esc(par) + "</p>"; }).join("")
                       : '<p class="empty">No biography written yet — what the record holds for this person is the ' +
                         "family tree entry, plus any stories and places listed here.</p>") +
              "</div>" +
            "</div>" +
            '<div class="section"><h2>Stories</h2>' + storiesSection(p) + "</div>" +
            (photos.length ? '<div class="section"><h2>Photographs</h2>' + gallery(photos) + "</div>" : "") +
            (related.length
              ? '<div class="section"><h2>From their stories and places</h2>' +
                '<p class="muted small" style="margin-top:-4px;margin-bottom:14px">Images tied to this ' +
                "person's stories and the places they lived — they aren't necessarily pictured.</p>" +
                gallery(related, { context: true }) + "</div>"
              : "") +
          "</div>" +
          "<div>" +
            '<div class="section"><h3>Close family</h3><div class="snapshot">' + snapshot(p) + "</div></div>" +
            '<div class="section"><h3>Places</h3>' + placesSection(p) + "</div>" +
          "</div>" +
        "</div>" +
        '<hr class="rule-orn">' +
      "</div>";
  });
})();
