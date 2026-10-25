/* The all-people index: a sortable, filterable table of everyone in the record. */
(function () {
  var FH = window.FH;
  var sortKey = "birth", filterText = "", filterGen = "";

  function rows() {
    var list = FH.people.slice();
    if (filterGen) list = list.filter(function (p) { return String(p.gen) === filterGen; });
    if (filterText) {
      var q = filterText.toLowerCase();
      list = list.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) !== -1 || (p.nickname || "").toLowerCase().indexOf(q) !== -1;
      });
    }
    list.sort(sortKey === "name"
      ? function (a, b) { return a.name.localeCompare(b.name); }
      : FH.byBirth);
    return list;
  }

  function render() {
    var list = rows();
    document.getElementById("people-count").textContent =
      list.length + (list.length === 1 ? " person" : " people");
    document.getElementById("people-body").innerHTML = list.map(function (p) {
      var stories = (p.storyIds || []).length;
      var places = (p.placeIds || []).length;
      return "<tr><td>" + FH.personLink(p, { dates: false }) +
        (p.nickname ? ' <span class="muted small">“' + FH.esc(p.nickname) + "”</span>" : "") +
        (p.relation !== "blood" ? ' <span class="chip">' + FH.esc(p.relation) + "</span>" : "") +
        '</td><td class="yr">' + FH.esc(p.birthLabel || "—") +
        '</td><td class="yr">' + FH.esc(p.deathLabel && p.deathLabel !== "living" ? p.deathLabel : "—") +
        '</td><td class="yr">' + (p.gen || "—") +
        '</td><td class="yr">' + (stories || "—") +
        '</td><td class="yr">' + (places || "—") + "</td></tr>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var search = document.getElementById("people-search");
    var gen = document.getElementById("people-gen");
    var sort = document.getElementById("people-sort");
    search.addEventListener("input", function () { filterText = search.value; render(); });
    gen.addEventListener("change", function () { filterGen = gen.value; render(); });
    sort.addEventListener("change", function () { sortKey = sort.value; render(); });
    render();
  });
})();
