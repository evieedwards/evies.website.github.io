document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        const aboutText = document.getElementById('about-text');
        aboutText.classList.toggle('visible');
    });
});