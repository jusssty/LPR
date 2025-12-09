document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-details').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const mainRow = btn.closest('.report-row');
      const detailsRow = mainRow.nextElementSibling;

      const isOpen = detailsRow.classList.contains('active');

      document.querySelectorAll('.details-row.active').forEach(row => {
        row.classList.remove('active');
        row.previousElementSibling
          .querySelector('.toggle-details').textContent = 'Подробнее';
      });

      if (!isOpen) {
        detailsRow.classList.add('active');
        btn.textContent = 'Свернуть';
      }
    });
  });
});

document.querySelectorAll('select, .tab-btn').forEach(el => {
  el.addEventListener('change', sendFilters);
  el.addEventListener('click', sendFilters);
});

function sendFilters() {
  const params = {
    type: document.querySelector('.tab-btn.active')?.dataset.type,
    semester: document.querySelector('[name="semester"]')?.value,
    faculty: document.querySelector('[name="faculty"]')?.value,
    department: document.querySelector('[name="department"]')?.value,
    e_status: document.querySelector('[name="e_status"]')?.value,
    p_status: document.querySelector('[name="p_status"]')?.value,
  };

  console.log('API-запрос', params);
  // fetch(`/api/reports?${new URLSearchParams(params)}`)
}
