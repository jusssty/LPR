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

