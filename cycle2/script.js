// 添加患者到小组
const patientList = document.getElementById('patient-list');
const groupName = document.getElementById('group-name');
const groupTheme = document.getElementById('group-theme');
const groupNotes = document.getElementById('group-notes');

const patients = ['Patient 1', 'Patient 2', 'Patient 3'];

// 显示患者列表
patients.forEach(patient => {
  const li = document.createElement('li');
  li.textContent = patient;
  li.addEventListener('click', () => {
    groupName.textContent = 'Group A'; // 示例小组名称
    groupTheme.textContent = 'Anxiety Management'; // 示例小组主题
    alert(`${patient} added to group!`);
  });
  patientList.appendChild(li);
});

// 保存笔记
document.getElementById('save-notes').addEventListener('click', () => {
  const notes = groupNotes.value;
  alert('Group notes saved: ' + notes);
});

// 安排会议
document.getElementById('schedule-btn').addEventListener('click', () => {
  const meetingTime = document.getElementById('meeting-time').value;
  alert('Meeting scheduled at: ' + meetingTime);
});
