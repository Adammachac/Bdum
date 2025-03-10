// Najdi přepínač
const themeToggle = document.getElementById('theme');

// Přidání události při změně
themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
        // Zapni dark mode
        document.body.classList.add('dark-mode');
    } else {
        // Vypni dark mode
        document.body.classList.remove('dark-mode');
    }
});

