const toggleSwitch = document.querySelector('#checkbox');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.className = savedTheme;
toggleSwitch.checked = savedTheme === 'light-mode';

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.className = 'light-mode';
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark-mode');
    }
});