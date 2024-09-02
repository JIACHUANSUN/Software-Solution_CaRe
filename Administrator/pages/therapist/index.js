document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.filter-item.dropdown');
  const resetFilter = document.querySelector('.reset-filter');
  const spinner = document.getElementById('loading-spinner');

  
  // Generate mock data with 150 entries
  const mockData = [];
  const groups = ['Group 1', 'Group 2', 'Group 3', 'Group 4'];
  const fields = ['Field 1', 'Field 2', 'Field 3', 'Field 4', 'Field 5', 'Field 6'];
  const statuses = ['Online', 'Rest', 'Quit'];

  for (let i = 1; i <= 150; i++) {
      mockData.push({
          id: `000${i.toString().padStart(2, '0')}`,
          name: `Person ${i}`,
          email: `person${i}@care.com`,
          group: groups[i % groups.length],
          field: fields[i % fields.length],
          status: statuses[i % statuses.length]
      });
  }

  

  // Function to show the loading spinner
  function showLoading() {
    spinner.style.display = 'block';
  }
      

  // Function to reload table content based on dropdown filters
  function reloadTable() {
      showLoading(); // Show loading spinner

      setTimeout(() => {
          const selectedGroup = document.querySelector('.dropdown-selected[data-default="Group"]').textContent;
          const selectedField = document.querySelector('.dropdown-selected[data-default="Field"]').textContent;
          const selectedStatus = document.querySelector('.dropdown-selected[data-default="Status"]').textContent;

          // Filter mock data based on selected values (ignore if defaults are selected)
          const filteredData = mockData.filter(item => {
              return (selectedGroup === 'Group' || item.group === selectedGroup) &&
                     (selectedField === 'Field' || item.field === selectedField) &&
                     (selectedStatus === 'Status' || item.status === selectedStatus);
          });

          const tbody = document.querySelector('.styled-table tbody');
          tbody.innerHTML = ''; // Clear spinner
          spinner.style.display = 'none';

          // Update table rows with filtered data
          filteredData.forEach(data => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${data.id}</td>
                  <td>${data.name}</td>
                  <td>${data.email}</td>
                  <td>${data.group}</td>
                  <td>${data.field}</td>
                  <td><span class="status ${data.status.toLowerCase()}">${data.status}</span></td>
                  <td style="max-width: 12rem">
                    <button class="operation-btn" onClick="showModal()">Edit</button>
                    <button class="operation-btn">Check</button>
                  </td>
              `;
              tbody.appendChild(row);
          });
      }, 1000); // Mock delay of 1 second
  }

  dropdowns.forEach(dropdown => {
      const selected = dropdown.querySelector('.dropdown-selected');
      const options = dropdown.querySelector('.dropdown-options');
      const items = dropdown.querySelectorAll('.dropdown-option');

      // Toggle dropdown open/close
      selected.addEventListener('click', function(event) {
          event.stopPropagation(); // Prevent triggering the document click listener
          // Close other dropdowns
          document.querySelectorAll('.dropdown-options').forEach(opt => {
              if (opt !== options) {
                  opt.style.display = 'none';
              }
          });

          options.style.display = options.style.display === 'block' ? 'none' : 'block';
      });

      // Set selected option, make reset-filter active, and reload table
      items.forEach(item => {
          item.addEventListener('click', function() {
              selected.textContent = this.textContent;
              options.style.display = 'none';
              resetFilter.classList.add('active');
              reloadTable(); // Reload the table with new filter
          });
      });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown-options').forEach(opt => {
              opt.style.display = 'none';
          });
      }
  });

  // Reset all dropdowns to default when reset-filter is clicked and reload table
  resetFilter.addEventListener('click', function() {
      if (resetFilter.classList.contains('active')) {
          dropdowns.forEach(dropdown => {
              const selected = dropdown.querySelector('.dropdown-selected');
              const defaultValue = selected.getAttribute('data-default');
              selected.textContent = defaultValue;
          });
          resetFilter.classList.remove('active');
          reloadTable(); // Reload the table with default filter
      }
  });

  // Initial setup to set default values and load table
  reloadTable(); // Load table with default values
});

    const editor = document.getElementById('therapost-editor');
    function hideModal()
    {
        if (!editor)
        editor = document.getElementById('therapost-editor');
        editor.style.display = 'none';
    }

    function showModal()
    {
        if (!editor)
        editor = document.getElementById('therapost-editor');
        editor.style.display = 'block';
    }

    showModal();


