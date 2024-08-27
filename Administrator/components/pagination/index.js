class Pagination {
    constructor(config) {
        // Default configuration options
        this.config = {
            containerId: 'pagination-container',
            totalPages: 1,
            currentPage: 1,
            onPageChange: () => {},
            ...config // Override defaults with user-provided config
        };
        
        this.container = document.getElementById(this.config.containerId);
        this.init();
    }

    // Initialize the pagination component
    init() {
        this.render();
        this.addEventListeners();
    }

    // Render pagination HTML
    render() {
        const { totalPages, currentPage } = this.config;
        let html = '';

        html += `<button class="pagination-prev" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>`;

        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="pagination-item ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }

        html += `<button class="pagination-next" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>`;

        this.container.innerHTML = html;
    }

    // Add event listeners for pagination buttons
    addEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('pagination-item')) {
                const page = parseInt(e.target.getAttribute('data-page'));
                this.update(page);
            } else if (e.target.classList.contains('pagination-prev')) {
                if (this.config.currentPage > 1) {
                    this.update(this.config.currentPage - 1);
                }
            } else if (e.target.classList.contains('pagination-next')) {
                if (this.config.currentPage < this.config.totalPages) {
                    this.update(this.config.currentPage + 1);
                }
            }
        });
    }

    // Update pagination when a new page is selected
    update(newPage) {
        if (newPage < 1 || newPage > this.config.totalPages) return;

        this.config.currentPage = newPage;
        this.render();
        this.config.onPageChange(newPage);
    }
}
