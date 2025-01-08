document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Získá ID z href
        const targetElement = document.getElementById(targetId); // Najde element podle ID
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Posune na začátek elementu
        });
    });
});
