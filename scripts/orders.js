const tableBtn = document.getElementById("tableViewBtn");
const listBtn = document.getElementById("listViewBtn");
const tableView = document.getElementById("tableView");
const listView = document.getElementById("listView");

tableBtn.addEventListener("click", () => {
  tableBtn.classList.add("active");
  listBtn.classList.remove("active");
  tableView.classList.add("active");
  listView.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  listBtn.classList.add("active");
  tableBtn.classList.remove("active");
  listView.classList.add("active");
  tableView.classList.remove("active");
});

// Фильтрация
const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");
const semesterFilter = document.getElementById("semesterFilter");

function filterOrders() {
  const term = searchInput.value.toLowerCase();
  const year = yearFilter.value;
  const semester = semesterFilter.value;

  const allRows = document.querySelectorAll("#ordersTable tbody tr");
  const allCards = document.querySelectorAll(".order-card");

  allRows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    const matchYear = year === "all" || row.dataset.year === year;
    const matchSemester = semester === "all" || row.dataset.semester === semester;
    row.style.display = text.includes(term) && matchYear && matchSemester ? "" : "none";
  });

  allCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const matchYear = year === "all" || card.dataset.year === year;
    const matchSemester = semester === "all" || card.dataset.semester === semester;
    card.style.display = text.includes(term) && matchYear && matchSemester ? "" : "none";
  });
}

searchInput.addEventListener("input", filterOrders);
yearFilter.addEventListener("change", filterOrders);
semesterFilter.addEventListener("change", filterOrders);