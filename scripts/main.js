function toggleStatus(el) {
  if (el.classList.contains("check")) {
    el.classList.remove("check");
    el.classList.add("cross");
  } else {
    el.classList.remove("cross");
    el.classList.add("check");
  }
  updateCount();
}

function updateCount() {
  const checks = document.querySelectorAll(".check");
  document.getElementById("doneCount").textContent = checks.length;
}

updateCount();