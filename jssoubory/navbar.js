let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-60px'; // Skrýt navbar (délka skrytí může být upravena)
    } else {
        navbar.style.top = '0'; // Zobrazit navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
