class SideMenu {
  constructor(menuData, containerId = 'sidebar') {
      this.menuData = menuData;
      this.container = document.getElementById(containerId);
  }

  createMenuItem(item) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = "#";
      link.dataset.target = item.path;
      link.innerHTML = `<span class="icon ${item.icon}"></span> ${item.label}`;
      link.addEventListener('click', (event) => {
          event.preventDefault();
          document.getElementById('contentFrame').src = item.path;
      });
      li.appendChild(link);

      if (item.children && item.children.length > 0) {
          const ul = document.createElement('ul');
          item.children.forEach(child => {
              ul.appendChild(this.createMenuItem(child));
          });
          li.appendChild(ul);
      }

      return li;
  }

  buildMenu() {
      const ul = document.createElement('ul');
      this.menuData.forEach(item => {
          ul.appendChild(this.createMenuItem(item));
      });
      return ul;
  }

  initialize() {
      if (this.container) {
          this.container.innerHTML = ''; // Clear any existing content
          this.container.appendChild(this.buildMenu());
      }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  fetch('data/menu.json')
      .then(response => response.json())
      .then(menuData => {
          const sideMenu = new SideMenu(menuData);
          sideMenu.initialize();
      });
});
