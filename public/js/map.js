/* The playable map.

   Every record in window.FH.presence says "these people were at this place between these two
   years". Pick a year and you get a snapshot: every place with at least one selected person in
   it. Press play and the year advances through the chosen range, so the family spreads out from
   Silesia to Milwaukee, scatters across Civil War battlefields, gathers at two lakes, and thins
   out again. Everyone is shown by default; the filter narrows it.

   Leaflet comes from a CDN with no API key, on free OpenStreetMap tiles — same "plain script
   tag" approach as the rest of the site. */
(function () {
  var FH = window.FH;

  var map, markerLayer, trailLayer;
  var range = FH.timeRange();
  var state = {
    year: range.min,
    from: range.min,
    to: range.max,
    playing: false,
    speed: 320,          // ms per year
    selected: {},        // personId -> true
    timer: null,
    focusPlace: null,
  };

  /* ---------- which people can ever appear ---------- */
  var placedPeople = (function () {
    var seen = {};
    (FH.presence || []).forEach(function (pr) {
      pr.personIds.forEach(function (id) { seen[id] = true; });
    });
    return FH.people.filter(function (p) { return seen[p.id]; }).sort(FH.byBirth);
  })();

  function selectedIds() {
    return Object.keys(state.selected).filter(function (k) { return state.selected[k]; });
  }

  /* ---------- what's happening in a given year ---------- */
  function snapshot(year) {
    var byPlace = {};
    (FH.presence || []).forEach(function (pr) {
      if (year < pr.startYear || year > pr.endYear) return;
      // a group span still has to fit each person's own lifespan — see FH.clampToLife
      var people = pr.personIds.filter(function (id) {
        return state.selected[id] && FH.presentIn(pr, id, year);
      });
      if (!people.length) return;
      var place = FH.place(pr.placeId);
      if (!place) return;
      if (!byPlace[place.id]) byPlace[place.id] = { place: place, entries: [] };
      byPlace[place.id].entries.push({ people: people, label: pr.label, kind: pr.kind });
    });
    return byPlace;
  }

  function peopleCount(group) {
    var seen = {};
    group.entries.forEach(function (e) { e.people.forEach(function (id) { seen[id] = 1; }); });
    return Object.keys(seen).length;
  }

  /* ---------- drawing ---------- */
  function markerKind(group) {
    var kinds = group.entries.map(function (e) { return e.kind; });
    if (kinds.indexOf("battle") !== -1) return "battle";
    if (kinds.indexOf("event") !== -1 || kinds.indexOf("travel") !== -1) return "event";
    return "";
  }

  function popupHtml(group) {
    var place = group.place;
    var html = "<h4>" + FH.esc(place.name) + "</h4>";
    if (place.modern && place.modern !== place.name) {
      html += '<div class="muted small">' + FH.esc(place.modern) + "</div>";
    }
    group.entries.forEach(function (e) {
      html += "<div style='margin-top:8px'><b>" + FH.esc(e.label) + "</b><ul>" +
        e.people.map(function (id) {
          var p = FH.person(id);
          return "<li>" + FH.personLink(p) + "</li>";
        }).join("") + "</ul></div>";
    });
    if (place.approx) html += '<div class="approx" style="margin-top:8px">Location is approximate.</div>';
    return html;
  }

  function draw() {
    var byPlace = snapshot(state.year);
    markerLayer.clearLayers();

    Object.keys(byPlace).forEach(function (pid) {
      var group = byPlace[pid];
      var n = peopleCount(group);
      var size = Math.max(26, Math.min(46, 22 + n * 3));
      var kind = markerKind(group);
      var icon = L.divIcon({
        className: "",
        html: '<div class="marker-pin ' + kind + '" style="width:' + size + "px;height:" + size + 'px">' + n + "</div>",
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
      var m = L.marker([group.place.lat, group.place.lng], { icon: icon, title: group.place.name })
        .bindPopup(popupHtml(group), { maxWidth: 300 })
        .bindTooltip(group.place.name, { direction: "top", offset: [0, -size / 2 - 2] });
      markerLayer.addLayer(m);
      if (state.focusPlace === group.place.id) m.openPopup();
    });

    drawTrail();
    renderNowList(byPlace);
    document.getElementById("year-label").textContent = state.year;
    document.getElementById("year-scrub").value = state.year;
    var total = Object.keys(byPlace).reduce(function (acc, k) { return acc + peopleCount(byPlace[k]); }, 0);
    document.getElementById("year-sub").textContent =
      total ? total + (total === 1 ? " person" : " people") + " in " + Object.keys(byPlace).length +
        (Object.keys(byPlace).length === 1 ? " place" : " places") : "no one on the map";
  }

  /* With only a few people selected, connect their places in chronological order. */
  function drawTrail() {
    trailLayer.clearLayers();
    var ids = selectedIds();
    if (ids.length === 0 || ids.length > 3) return;
    ids.forEach(function (id) {
      var pts = FH.presenceFor(id)
        .filter(function (pr) { return pr.startYear <= state.year; })
        .map(function (pr) { var pl = FH.place(pr.placeId); return pl ? [pl.lat, pl.lng] : null; })
        .filter(Boolean);
      if (pts.length < 2) return;
      trailLayer.addLayer(L.polyline(pts, {
        color: "#8a4b38", weight: 1.6, opacity: .5, dashArray: "4 5",
      }));
    });
  }

  function renderNowList(byPlace) {
    var keys = Object.keys(byPlace).sort(function (a, b) {
      return peopleCount(byPlace[b]) - peopleCount(byPlace[a]);
    });
    var el = document.getElementById("now-list");
    if (!keys.length) {
      el.innerHTML = '<li class="empty">Nobody selected is recorded anywhere in ' + state.year + ".</li>";
      return;
    }
    el.innerHTML = keys.map(function (k) {
      var g = byPlace[k];
      var names = {};
      g.entries.forEach(function (e) { e.people.forEach(function (id) { names[id] = 1; }); });
      var list = Object.keys(names).map(function (id) {
        var p = FH.person(id);
        return '<a href="' + FH.personHref(id) + '">' + FH.esc(p.name) + "</a>";
      });
      return '<li><span class="pl">' + FH.esc(g.place.name) + '</span><span class="who">' +
        list.join(", ") + '</span><span class="lbl">' + FH.esc(g.entries[0].label) + "</span></li>";
    }).join("");
  }

  /* ---------- playback ---------- */
  function setYear(y) {
    state.year = Math.max(state.from, Math.min(state.to, y));
    state.focusPlace = null;
    draw();
  }

  function tick() {
    if (state.year >= state.to) setYear(state.from);
    else setYear(state.year + 1);
  }

  function play() {
    if (state.playing) return;
    state.playing = true;
    if (state.year >= state.to) state.year = state.from;
    state.timer = setInterval(tick, state.speed);
    updatePlayBtn();
  }

  function pause() {
    state.playing = false;
    clearInterval(state.timer);
    updatePlayBtn();
  }

  var PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';

  function updatePlayBtn() {
    var b = document.getElementById("play-btn");
    b.innerHTML = state.playing ? PAUSE_ICON : PLAY_ICON;
    b.setAttribute("aria-label", state.playing ? "Pause" : "Play");
    b.title = state.playing ? "Pause" : "Play through the years";
  }

  /* ---------- people filter ---------- */
  function renderFilter() {
    var byGen = {};
    placedPeople.forEach(function (p) {
      var g = p.gen || "—";
      (byGen[g] = byGen[g] || []).push(p);
    });
    var html = Object.keys(byGen).sort().map(function (g) {
      return '<li class="gen-label">Generation ' + FH.esc(g) +
        '<button type="button" class="btn" data-gen="' + FH.esc(g) + '">only</button></li>' +
        byGen[g].map(function (p) {
          return "<li><label><input type=\"checkbox\" data-person=\"" + FH.esc(p.id) + "\"" +
            (state.selected[p.id] ? " checked" : "") + "><span>" + FH.esc(p.name) +
            ' <span class="dates">' + FH.esc(FH.yearSpan(p)) + "</span></span></label></li>";
        }).join("");
    }).join("");
    document.getElementById("people-filter").innerHTML = html;
    document.getElementById("filter-count").textContent =
      selectedIds().length + " of " + placedPeople.length;
  }

  function selectAll(on) {
    placedPeople.forEach(function (p) { state.selected[p.id] = on; });
    renderFilter();
    draw();
  }

  function selectOnly(ids) {
    placedPeople.forEach(function (p) { state.selected[p.id] = false; });
    ids.forEach(function (id) { state.selected[id] = true; });
    renderFilter();
    draw();
  }

  /* ---------- setup ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var personParam = FH.param("person");
    var yearParam = parseInt(FH.param("year"), 10);
    var placeParam = FH.param("place");

    // default: everyone
    placedPeople.forEach(function (p) { state.selected[p.id] = true; });
    if (personParam && FH.person(personParam)) {
      placedPeople.forEach(function (p) { state.selected[p.id] = false; });
      state.selected[personParam] = true;
      var first = FH.presenceFor(personParam)[0];
      if (first && !yearParam) state.year = first.startYear;
    }
    if (yearParam) state.year = Math.max(range.min, Math.min(range.max, yearParam));
    if (placeParam) state.focusPlace = placeParam;

    map = L.map("leaflet-map", { scrollWheelZoom: true, worldCopyJump: true })
      .setView([44.5, -60], 3);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    trailLayer = L.layerGroup().addTo(map);
    markerLayer = L.layerGroup().addTo(map);

    var scrub = document.getElementById("year-scrub");
    scrub.min = range.min;
    scrub.max = range.max;
    scrub.value = state.year;
    document.getElementById("from-year").value = state.from;
    document.getElementById("to-year").value = state.to;

    scrub.addEventListener("input", function () { pause(); setYear(parseInt(scrub.value, 10)); });
    document.getElementById("play-btn").addEventListener("click", function () {
      state.playing ? pause() : play();
    });
    document.getElementById("speed").addEventListener("change", function (e) {
      state.speed = parseInt(e.target.value, 10);
      if (state.playing) { pause(); play(); }
    });

    ["from-year", "to-year"].forEach(function (id) {
      document.getElementById(id).addEventListener("change", function () {
        var from = parseInt(document.getElementById("from-year").value, 10) || range.min;
        var to = parseInt(document.getElementById("to-year").value, 10) || range.max;
        state.from = Math.max(range.min, Math.min(from, range.max));
        state.to = Math.max(state.from, Math.min(to, range.max));
        document.getElementById("from-year").value = state.from;
        document.getElementById("to-year").value = state.to;
        scrub.min = state.from;
        scrub.max = state.to;
        setYear(state.year);
      });
    });

    document.getElementById("people-filter").addEventListener("change", function (e) {
      var cb = e.target.closest("input[data-person]");
      if (!cb) return;
      state.selected[cb.dataset.person] = cb.checked;
      document.getElementById("filter-count").textContent =
        selectedIds().length + " of " + placedPeople.length;
      draw();
    });

    document.getElementById("people-filter").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-gen]");
      if (!b) return;
      selectOnly(placedPeople.filter(function (p) { return String(p.gen) === b.dataset.gen; })
        .map(function (p) { return p.id; }));
    });

    document.getElementById("select-all").addEventListener("click", function () { selectAll(true); });
    document.getElementById("select-none").addEventListener("click", function () { selectAll(false); });

    document.addEventListener("keydown", function (e) {
      if (e.target.matches("input, select, textarea")) return;
      if (e.key === " ") { e.preventDefault(); state.playing ? pause() : play(); }
      if (e.key === "ArrowRight") { pause(); setYear(state.year + 1); }
      if (e.key === "ArrowLeft") { pause(); setYear(state.year - 1); }
    });

    renderFilter();
    updatePlayBtn();
    draw();

    if (placeParam && FH.place(placeParam)) {
      var pl = FH.place(placeParam);
      map.setView([pl.lat, pl.lng], 9);
    } else if (personParam) {
      var pts = FH.presenceFor(personParam).map(function (pr) {
        var p = FH.place(pr.placeId);
        return p ? [p.lat, p.lng] : null;
      }).filter(Boolean);
      if (pts.length) map.fitBounds(L.latLngBounds(pts).pad(.25));
    }
  });
})();
