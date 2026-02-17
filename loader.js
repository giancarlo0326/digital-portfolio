document.addEventListener('DOMContentLoaded', () => {
    // Initializing Lottie
    lottie.loadAnimation({
        container: document.getElementById('lottie-icon'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/programming-icon.json' 
    });

    // Hide screen on load
    window.addEventListener('load', () => {
        const loader = document.getElementById('page-loader');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2000); 
    });
});