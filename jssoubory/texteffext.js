window.onload = function() {
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    textElements.forEach(element => {
        element.classList.add('loaded');
    });
};
