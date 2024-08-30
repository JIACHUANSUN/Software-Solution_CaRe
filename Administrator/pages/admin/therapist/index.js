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

const testDoctorNum = 150;

const tabContainer = document.getElementById('table-container');

for (let i = 0; i < testDoctorNum; i++) {
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

tabContainer.appendChild(createTable(columns, doctors.slice(0, 10)));

// Example of how to initialize and use the Pagination component
const pagination = new Pagination({
    totalPages: doctors.length / 10,
    containerId: "pagination-container",
    currentPage: 1,
    onPageChange: (page) => {
        tabContainer.innerHTML = '';
        tabContainer.appendChild(createTable(columns, doctors.slice(page * 10, (page + 1) * 10)));
    }
});