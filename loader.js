document.addEventListener('DOMContentLoaded', () => {
    // Renders the animation inside #lottie-icon
    lottie.loadAnimation({
        container: document.getElementById('lottie-icon'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/programming-icon.json' 
    });

    // Wait for full page load
    window.addEventListener('load', () => {
        const loader = document.getElementById('page-loader');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2000); 
    });
});