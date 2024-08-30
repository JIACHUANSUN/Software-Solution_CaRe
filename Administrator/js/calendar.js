document.addEventListener('DOMContentLoaded', function () {
  const currentMonthElement = document.querySelector('.current-month');
  const calendarDatesElement = document.querySelector('.calendar-dates');
  const prevMonthButton = document.querySelector('.prev-month');
  const nextMonthButton = document.querySelector('.next-month');

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  function renderCalendar(month, year) {
      currentMonthElement.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
      calendarDatesElement.innerHTML = '';
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        const noneElement = document.createElement('div');
        noneElement.style.pointerEvents = 'none';
          calendarDatesElement.appendChild(noneElement);
      }

      for (let i = 1; i <= daysInMonth; i++) {
          const dateElement = document.createElement('button');
          dateElement.textContent = i;
          dateElement.addEventListener('click', function () {
              document.querySelectorAll('.calendar-dates div').forEach(e => e.classList.remove('selected'));
              dateElement.classList.add('selected');
          });
          calendarDatesElement.appendChild(dateElement);
      }
  }

  prevMonthButton.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
  });

  nextMonthButton.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});
