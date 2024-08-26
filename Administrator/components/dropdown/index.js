document.addEventListener("DOMContentLoaded", function() {
  const dropdownTrigger = document.querySelector('.dropdown-trigger');
  const dropdown = document.querySelector('.dropdown');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      dropdown.classList.toggle('open'); // Toggle the open class
    });

    // Close the dropdown if clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !dropdownTrigger.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
  }
});
