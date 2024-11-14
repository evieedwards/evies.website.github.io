document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutText = document.getElementById('about-text');
    aboutText.style.display = aboutText.style.display === 'none' ? 'block' : 'none';
}); 