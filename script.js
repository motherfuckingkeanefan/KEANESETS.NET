const searchInput = document.getElementById("searchInput");
const table = document.getElementById("showsTable");
const tbody = table.tBodies[0];

searchInput.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = tbody.getElementsByTagName("tr");

  for (let row of rows) {
    const cells = row.getElementsByTagName("td");
    let text = "";
    for (let cell of cells) {
      text += cell.textContent.toLowerCase() + " ";
    }
    row.style.display = text.includes(filter) ? "" : "none";
  }
});

function sortTable(type, asc) {
  const rows = Array.from(tbody.rows).filter(row => row.style.display !== "none");

  rows.sort((a, b) => {
    let valA, valB;

    if (type === "date") {
      valA = new Date(a.cells[0].textContent);
      valB = new Date(b.cells[0].textContent);
    } else if (type === "venue") {
      valA = a.cells[1].textContent.toLowerCase();
      valB = b.cells[1].textContent.toLowerCase();
    }

    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });

  rows.forEach((row) => tbody.appendChild(row));
}

// Sort buttons handlers
document.getElementById("sortOldest").addEventListener("click", () => sortTable("date", true));
document.getElementById("sortRecent").addEventListener("click", () => sortTable("date", false));
document.getElementById("sortAZ").addEventListener("click", () => sortTable("venue", true));
document.getElementById("sortZA").addEventListener("click", () => sortTable("venue", false));
