const columns = [
  { key: 'photo', label: '' }, // Placeholder for photo
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'group', label: 'Group' },
  { key: 'field', label: 'Professional Field' },
  { key: 'operations', label: 'Operation' },
  { key: 'status', label: 'Status' }
];


const photos = ['/assets/doc0.jpeg', '/assets/doc1.jpeg', '/assets/doc2.jpeg'];
const names = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David Wilson', 'Eve Davis', 'Frank Miller', 'Grace Lee',
    'Hank Lewis', 'Isabel Clark', 'Jack Robinson', 'Katie Brooks', 'Liam Turner', 'Mia Martinez', 'Noah Harris',
    'Olivia White', 'Paul Walker', 'Quinn Adams', 'Rachel Moore', 'Sam Taylor', 'Tina Thompson', 'Uma Scott',
    'Victor Young', 'Wendy Hill', 'Xander Lewis', 'Yara King', 'Zoe Campbell', 'Adam Wright', 'Brian Green',
    'Cathy Lewis', 'Derek White', 'Erin Miller', 'Fred Davis', 'George Brown', 'Holly Thompson', 'Ian Clark',
    'Judy Adams', 'Kevin Harris', 'Laura Young', 'Mike Smith', 'Nina Walker', 'Oscar Turner', 'Penny Lee',
    'Quincy Brooks', 'Rita Taylor', 'Steve Johnson', 'Tom Martinez', 'Ursula Hill', 'Vince King', 'Wanda White',
    'Xenia Campbell', 'Yvonne Scott', 'Zachary Green'
];

const groups = ['Expert group', 'Therapist group', 'Nurse group'];
const professionalFields = ['Early intervention records', 'Child psychology', 'General practice'];

const doctors = [];

for (let i = 0; i < 55; i++) {
    const doctor = {
        id: String(i + 1).padStart(3, '0'), // IDs from 001 to 055
        name: names[i],
        email: `name${i + 1}@care.com`,
        group: groups[Math.floor(Math.random() * groups.length)],
        field: professionalFields[Math.floor(Math.random() * professionalFields.length)],
        photo: photos[Math.floor(Math.random() * photos.length)],
        operations: ['edit', 'check'], // Operations available
        status: Math.random() > 0.5 ? 'Online' : 'Offline' // Random online/offline status
    };
    doctors.push(doctor);
}

document.getElementById('table-container').appendChild(createTable(columns, doctors));

// Example of how to initialize and use the Pagination component
const pagination = new Pagination({
    totalPages: 5,
    containerId: "pagination-container",
    currentPage: 1,
    onPageChange: (page) => {
        console.log('Page changed to:', page);
        // Your logic to fetch new data based on the current page
    }
});

// Update pagination dynamically (e.g., after fetching data)
function updatePagination(totalPages) {
    pagination.config.totalPages = totalPages;
    pagination.update(1); // Reset to first page
}

// Example usage of updating pagination dynamically
setTimeout(() => {
    updatePagination(10); // Simulate updating pagination after fetching new data
}, 2000);