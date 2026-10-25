/* Header, footer, and the people-search box that every page shares. */
(function () {
  var FH = window.FH;

  var NAV = [
    { href: "index.html", label: "Family tree", page: "tree" },
    { href: "stories.html", label: "Stories", page: "stories" },
    { href: "map.html", label: "Map", page: "map" },
    { href: "people.html", label: "All people", page: "people" },
  ];

  var MARK = '<svg class="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M12 21V9"/><path d="M12 13 7.5 9.5"/>' +
    '<path d="M12 13l4.5-3.5"/><path d="M12 9c0-3 2-5 5-5 0 3-2 5-5 5z"/>' +
    '<path d="M12 9C12 6 10 4 7 4c0 3 2 5 5 5z"/><path d="M8 21h8"/></svg>';

  function header() {
    var page = document.body.dataset.page;
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === page ? ' aria-current="page"' : "") + ">" +
        FH.esc(n.label) + "</a>";
    }).join("");
    return '<div class="bar"><a class="brand" href="index.html">' + MARK +
      "Mueller Family History</a>" +
      '<nav class="site-nav">' + links + "</nav></div>";
  }

  function footer() {
    return '<div class="bar"><span>Compiled from <i>Mueller History in Milwaukee &amp; Waukesha ' +
      "Counties</i> (v.1). Dates and details are as recorded there.</span>" +
      '<span><button type="button" class="linkish" id="sign-out">Sign out</button></span></div>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("site-header");
    if (h) h.innerHTML = header();
    var f = document.getElementById("site-footer");
    if (f) { f.className = "site-footer"; f.innerHTML = footer(); }

    document.addEventListener("click", function (e) {
      if (!e.target.closest("#sign-out")) return;
      fetch("/api/logout", { method: "POST" }).then(function () { location.href = "/login.html"; });
    });
  });

  /* Shared person search — used by the tree page and the all-people page. */
  FH.matchPeople = function (query) {
    var q = query.trim().toLowerCase();
    if (!q) return [];
    return FH.people.filter(function (p) {
      return p.name.toLowerCase().indexOf(q) !== -1 ||
        (p.nickname || "").toLowerCase().indexOf(q) !== -1;
    }).sort(FH.byBirth);
  };
})();
