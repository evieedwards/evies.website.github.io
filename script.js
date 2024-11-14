document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutText = document.getElementById('about-text');
    if (aboutText.classList.contains('hidden')) {
        aboutText.classList.remove('hidden');
    } else {
        aboutText.classList.add('hidden');
    }
}); 