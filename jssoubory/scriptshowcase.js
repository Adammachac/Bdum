// Animace textu a loga v showcase
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.showcase-logo img');
    const showcaseText = document.querySelector('.showcase h1');

    if (logo && showcaseText) {
        // Přiblížení loga při najetí myší
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'scale(1.1)';
            logo.style.transition = 'transform 0.3s ease-in-out';
        });

        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'scale(1)';
        });

        // Vykreslení písmen textu postupně
        const text = showcaseText.textContent;
        showcaseText.textContent = '';
        Array.from(text).forEach((letter, index) => {
            setTimeout(() => {
                showcaseText.textContent += letter;
            }, 100 * index); // 100 ms mezi každým písmenem
        });
    }
});

// Posunující se recenze
const testimonialSlider = document.querySelector('.testimonial-slider');

if (testimonialSlider) {
    let isPaused = false;

    // Automatický posun recenzí
    const slideTestimonials = () => {
        if (!isPaused) {
            testimonialSlider.scrollBy({
                left: 1,
                behavior: 'smooth',
            });

            // Reset scrollu na začátek, pokud je na konci
            if (
                testimonialSlider.scrollLeft + testimonialSlider.clientWidth >=
                testimonialSlider.scrollWidth
            ) {
                testimonialSlider.scrollTo({ left: 0, behavior: 'instant' });
            }
        }
    };

    const sliderInterval = setInterval(slideTestimonials, 20); // Každých 20 ms

    // Pozastavení posuvu při najetí myší
    testimonialSlider.addEventListener('mouseover', () => {
        isPaused = true;
    });

    testimonialSlider.addEventListener('mouseout', () => {
        isPaused = false;
    });
}

// CTA tlačítko
const contactButton = document.querySelector('.cta-button');

if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert('Děkujeme za zájem! Brzy se Vám ozveme.');
    });
}
