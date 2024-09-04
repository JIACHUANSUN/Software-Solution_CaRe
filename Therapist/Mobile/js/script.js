document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交的默认行为
    window.location.href = 'index2.html'; // 登录后跳转到第二个页面
});

document.querySelector('.bottom-nav button').addEventListener('click', function() {
    alert('Contact Admin at admin@care.com');
});

// 其他页面的导航按钮
function goToPage(page) {
    window.location.href = page;
}

// 页面四的模态框交互
document.querySelector('.confirm-btn').addEventListener('click', function() {
    alert('Confirmed!');
    window.location.href = 'index2.html'; // 确认后返回第二个页面
});
