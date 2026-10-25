/* Homepage family tree: one column per generation, couples as single cards, and
   SVG connectors drawn from each couple to their children in the next column.
   Connectors are measured from the rendered DOM, so they survive any reflow. */
(function () {
  var FH = window.FH;

  var GEN_YEARS = {
    1: "b. 1789–1799",
    2: "b. 1819–1849",
    3: "b. 1864–1898",
    4: "b. 1901–1922",
    5: "b. 1929–1968",
  };

  // Marked on the chart as the direct line this history follows forward.
  var DIRECT = {
    "charles-gottfried-mueller": 1, "elisabeth-elgner": 1,
    "julius-mueller-sr": 1, "frances-helena-alter": 1,
    "eh-mueller": 1, "anna-dietrich": 1,
  };

  var board, svg, unitEls = {};

  /* ---------- build units: a blood member plus anyone married in ---------- */
  function buildUnits() {
    var claimed = {}, units = [];
    var people = FH.people.slice().sort(FH.byBirth);

    people.forEach(function (p) {
      if (claimed[p.id]) return;
      var spouses = FH.spouses(p).filter(function (s) { return !claimed[s.id]; });
      // Anchor on whoever is related by blood, so a married-in spouse never owns the card.
      var anchorIsBlood = (p.parentIds && p.parentIds.length) || DIRECT[p.id];
      if (!anchorIsBlood) {
        var bloodSpouse = spouses.find(function (s) { return (s.parentIds && s.parentIds.length) || DIRECT[s.id]; });
        if (bloodSpouse && !claimed[bloodSpouse.id]) return; // let the blood spouse claim this pair
      }
      claimed[p.id] = 1;
      spouses.forEach(function (s) { claimed[s.id] = 1; });
      units.push({ id: "u-" + p.id, anchor: p, spouses: spouses, gen: p.gen, members: [p].concat(spouses) });
    });

    return units;
  }

  function unitHtml(u) {
    var p = u.anchor;
    var photo = FH.portrait(p);
    var stories = (p.storyIds || []).length;
    var html = "";

    if (photo) {
      html += '<img class="thumb" src="' + FH.esc(photo.src) + '" alt="" loading="lazy">';
    }

    html += '<div class="row"><a class="name" href="' + FH.personHref(p.id) + '">' + FH.esc(p.name) + "</a>";
    if (p.nickname) html += '<span class="nick">“' + FH.esc(p.nickname) + "”</span>";
    html += "</div>";
    var span = FH.yearSpan(p);
    if (span) html += '<div class="row"><span class="dates">' + FH.esc(span) + "</span></div>";

    u.spouses.forEach(function (s) {
      html += '<div class="row spouse"><span class="m">m.</span><a class="name" href="' +
        FH.personHref(s.id) + '">' + FH.esc(s.name) + "</a>";
      var ss = FH.yearSpan(s);
      if (ss) html += ' <span class="dates">' + FH.esc(ss) + "</span>";
      html += "</div>";
    });

    var tags = [];
    if (stories) tags.push('<span class="tag story">' + stories + " stor" + (stories === 1 ? "y" : "ies") + "</span>");
    if (p.relation === "household") tags.push('<span class="tag">household</span>');
    if (p.relation === "half-sibling") tags.push('<span class="tag">half-sibling</span>');
    if (tags.length) html += '<div class="tags">' + tags.join("") + "</div>";

    return html;
  }

  function render() {
    var units = buildUnits();
    var gens = [1, 2, 3, 4, 5];
    board.innerHTML = '<svg class="tree-links" id="tree-links" aria-hidden="true"></svg>' +
      gens.map(function (g) {
        var inGen = units.filter(function (u) { return u.gen === g; });
        return '<div class="gen-col" data-gen="' + g + '">' +
          '<div class="gen-head"><span class="n">Generation ' + g + '</span>' +
          '<span class="yrs">' + FH.esc(GEN_YEARS[g] || "") + "</span></div>" +
          inGen.map(function (u) {
            var direct = u.members.some(function (m) { return DIRECT[m.id]; });
            return '<div class="unit' + (direct ? " direct" : "") + '" id="' + u.id +
              '" data-members="' + FH.esc(u.members.map(function (m) { return m.id; }).join(" ")) + '">' +
              unitHtml(u) + "</div>";
          }).join("") +
          "</div>";
      }).join("");

    svg = document.getElementById("tree-links");
    unitEls = {};
    units.forEach(function (u) {
      var el = document.getElementById(u.id);
      u.members.forEach(function (m) { unitEls[m.id] = el; });
    });

    drawLinks();
  }

  /* ---------- connectors ---------- */
  function drawLinks() {
    if (!svg) return;
    var base = board.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + board.scrollWidth + " " + board.scrollHeight);
    svg.setAttribute("width", board.scrollWidth);
    svg.setAttribute("height", board.scrollHeight);

    var paths = [];
    FH.people.forEach(function (p) {
      if (!p.parentIds || !p.parentIds.length) return;
      var childEl = unitEls[p.id];
      var parentEl = unitEls[p.parentIds[0]];
      if (!childEl || !parentEl || childEl === parentEl) return;

      var pr = parentEl.getBoundingClientRect(), cr = childEl.getBoundingClientRect();
      var x1 = pr.right - base.left, y1 = pr.top + pr.height / 2 - base.top;
      var x2 = cr.left - base.left, y2 = cr.top + cr.height / 2 - base.top;
      if (x2 <= x1) return;
      var mid = x1 + (x2 - x1) / 2;
      paths.push('<path d="M' + x1 + " " + y1 + " C" + mid + " " + y1 + ", " + mid + " " + y2 +
        ", " + x2 + " " + y2 + '" fill="none" stroke="#c6b291" stroke-width="1.2" ' +
        'data-child="' + FH.esc(p.id) + '" data-parent="' + FH.esc(p.parentIds[0]) + '"/>');
    });
    svg.innerHTML = paths.join("");
  }

  /* ---------- search + highlight ---------- */
  function setupSearch() {
    var input = document.getElementById("tree-search");
    var box = document.getElementById("tree-search-results");
    if (!input) return;

    function close() { box.hidden = true; box.innerHTML = ""; }

    input.addEventListener("input", function () {
      var matches = FH.matchPeople(input.value).slice(0, 12);
      if (!matches.length) return close();
      box.innerHTML = matches.map(function (p) {
        return '<a href="' + FH.personHref(p.id) + '" data-id="' + FH.esc(p.id) + '">' +
          FH.esc(p.name) + ' <span class="dates">' + FH.esc(FH.yearSpan(p)) + "</span></a>";
      }).join("");
      var r = input.getBoundingClientRect();
      box.style.left = r.left + window.scrollX + "px";
      box.style.top = r.bottom + window.scrollY + 4 + "px";
      box.style.width = r.width + "px";
      box.hidden = false;
    });

    box.addEventListener("mouseover", function (e) {
      var a = e.target.closest("a[data-id]");
      if (a) highlight(a.dataset.id);
    });

    input.addEventListener("blur", function () { setTimeout(close, 160); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* Dim everyone outside a person's direct line + descendants. */
  function highlight(id) {
    var keep = FH.descendants(id);
    keep[id] = 1;
    var p = FH.person(id);
    while (p && p.parentIds && p.parentIds.length) {
      p.parentIds.forEach(function (pid) { keep[pid] = 1; });
      p = FH.person(p.parentIds[0]);
    }
    FH.spouses(FH.person(id) || {}).forEach(function (s) { keep[s.id] = 1; });

    board.querySelectorAll(".unit").forEach(function (el) {
      var members = (el.dataset.members || "").split(" ");
      var on = members.some(function (m) { return keep[m]; });
      el.classList.toggle("dim", !on);
      el.classList.toggle("hit", members.indexOf(id) !== -1);
    });
  }

  function clearHighlight() {
    board.querySelectorAll(".unit").forEach(function (el) {
      el.classList.remove("dim");
      el.classList.remove("hit");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    board = document.getElementById("tree-board");
    if (!board) return;
    render();
    setupSearch();

    board.addEventListener("mouseover", function (e) {
      var unit = e.target.closest(".unit");
      if (unit) highlight((unit.dataset.members || "").split(" ")[0]);
    });
    board.addEventListener("mouseleave", clearHighlight);

    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(drawLinks, 120);
    });
    // fonts landing late shift every card, so re-measure once they're in
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLinks);
  });
})();
