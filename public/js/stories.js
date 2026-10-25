/* Two pages in one file: the story index (stories.html) and a single story (story.html). */
(function () {
  var FH = window.FH;

  function renderIndex(main) {
    var stories = FH.stories.slice().sort(function (a, b) { return (a.yearStart || 0) - (b.yearStart || 0); });
    main.innerHTML =
      '<div class="wrap page-head">' +
        '<p class="eyebrow">Twenty pieces of the record</p>' +
        "<h1>Stories</h1>" +
        '<p class="lede">The narrative sections of the family history, in the order they happened. ' +
        "Each one links to the people it involves and the places it happened.</p>" +
        '<hr class="rule-orn">' +
        '<ul class="story-list">' + stories.map(function (s) {
          var people = FH.peopleInStory(s).slice(0, 6);
          return '<li class="card"><h3><a href="' + FH.storyHref(s.id) + '">' + FH.esc(s.title) + "</a> " +
            '<span class="dates story-years">' + FH.esc(s.years) + "</span></h3>" +
            '<p class="summary">' + FH.esc(s.summary) + "</p>" +
            '<div class="meta" style="display:flex;gap:6px;flex-wrap:wrap">' +
            people.map(function (p) {
              return '<a class="chip" href="' + FH.personHref(p.id) + '">' + FH.esc(p.name) + "</a>";
            }).join("") +
            (FH.peopleInStory(s).length > 6 ? '<span class="chip">+' + (FH.peopleInStory(s).length - 6) + " more</span>" : "") +
            "</div></li>";
        }).join("") + "</ul>" +
        '<hr class="rule-orn">' +
      "</div>";
  }

  function renderStory(main, s) {
    document.title = s.title + " · Mueller Family History";
    var people = FH.peopleInStory(s);
    var places = (s.placeIds || []).map(FH.place).filter(Boolean);
    var photos = (s.photoIds || []).map(FH.photo).filter(Boolean);

    main.innerHTML =
      '<div class="wrap">' +
        '<div class="story-head">' +
          '<p class="eyebrow"><a href="stories.html">Stories</a> · <span class="story-years">' + FH.esc(s.years) + "</span></p>" +
          "<h1>" + FH.esc(s.title) + "</h1>" +
          '<p class="lede">' + FH.esc(s.summary) + "</p>" +
        "</div>" +
        '<hr class="rule-orn">' +
        '<div class="cols">' +
          '<div><div class="prose">' +
            s.body.map(function (par) { return "<p>" + FH.esc(par) + "</p>"; }).join("") +
          "</div>" +
          (photos.length ? '<div class="section" style="margin-top:26px"><h3>Photographs</h3><div class="gallery">' +
            photos.map(function (ph) {
              return "<figure><img src=\"" + FH.esc(ph.src) + '" alt="' + FH.esc(ph.caption) + '" loading="lazy">' +
                "<figcaption>" + FH.esc(ph.caption) + "</figcaption></figure>";
            }).join("") + "</div></div>" : "") +
          "</div>" +
          "<div>" +
            '<div class="section"><h3>People</h3><ul class="snap-list">' +
              people.map(function (p) { return "<li>" + FH.personLink(p) + "</li>"; }).join("") +
            "</ul></div>" +
            '<div class="section"><h3>Places</h3><ul class="linklist">' +
              places.map(function (pl) {
                return '<li><a class="title" href="' + FH.mapHref({ place: pl.id, year: s.yearStart }) + '">' +
                  FH.esc(pl.name) + "</a>" +
                  '<span class="sub">' + FH.esc(pl.blurb) + "</span></li>";
              }).join("") +
            "</ul>" +
            '<a class="btn" style="margin-top:12px" href="' + FH.mapHref({ year: s.yearStart }) + '">Open the map at ' +
              FH.esc(s.yearStart) + "</a></div>" +
          "</div>" +
        "</div>" +
        '<hr class="rule-orn">' +
      "</div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var main = document.getElementById("stories-main");
    if (!main) return;
    var id = FH.param("id");
    if (!id) return renderIndex(main);
    var s = FH.story(id);
    if (!s) {
      main.innerHTML = '<div class="wrap page-head"><h1>Not found</h1><p class="lede">' +
        'No story by that id. <a href="stories.html">All stories</a>.</p></div>';
      return;
    }
    renderStory(main, s);
  });
})();
