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
    if (text.includes(filter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
