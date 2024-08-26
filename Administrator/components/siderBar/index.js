document.addEventListener("DOMContentLoaded", function() {
  const toggleItems = document.querySelectorAll('[data-toggle]');

  toggleItems.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default anchor behavior
          const isExpanded = this.classList.contains('expanded');

          // Collapse all other expanded items if needed
          toggleItems.forEach(i => i.classList.remove('expanded'));

          // Toggle the current item
          if (isExpanded) {
              this.classList.remove('expanded');
          } else {
              this.classList.add('expanded');
          }
      });
  });
});
