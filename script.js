// 1. Theme Button Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.className = savedTheme;

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// 2. Responsive Navbar Logic
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close nav when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// 3. Resize Cleanup
// Ensures that if the window is resized back to desktop, the mobile "active" state is cleared
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        mainNav.classList.remove('active');
    }
});