document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#darkModeToggle'); // Přepínací tlačítko

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Přidání/odebrání třídy
    });
});
