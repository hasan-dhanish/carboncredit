// Sidebar / Navigation Logic
document.addEventListener('DOMContentLoaded', function () {

    // Toggle sidebar on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    }

    // Scroll to sections when clicking on menu items / Switch pages
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));

            // Add active class to clicked menu item
            this.classList.add('active');

            // Handle page switching
            const pageId = this.getAttribute('data-page') + '-page';
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

            // Show new page if it exists
            const page = document.getElementById(pageId);
            if (page) {
                page.classList.add('active');

                // If it's a long page, we might want to scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Fallback for scrolling if single-page with sections (like original implementation might have been)
                const section = document.getElementById(this.getAttribute('data-page'));
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Update page title
            const pageTitle = this.querySelector('.menu-text').textContent;
            const titleEl = document.querySelector('.page-title');
            if (titleEl) titleEl.textContent = pageTitle;

            // Close sidebar on mobile after selection
            if (window.innerWidth < 992) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
            const sidebar = document.querySelector('.sidebar');
            const toggle = document.querySelector('.menu-toggle');

            if (sidebar && toggle && !sidebar.contains(e.target) && !toggle.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Close Modals
    const closeBtns = document.querySelectorAll('.close-modal');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});

// Logout function
function logout() {
    // Redirect to the login page
    window.location.href = 'login.html';
}
