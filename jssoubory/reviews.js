const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
const reviews = document.querySelectorAll('.review-item');

// Klonování recenzí pro nekonečnou smyčku
const clonedReviews = Array.from(reviews).map(review => review.cloneNode(true));
clonedReviews.forEach(review => sliderWrapper.appendChild(review)); // Přidáme klony na konec slideru

// Funkce pro plynulý posun
function moveReviews() {
    const totalWidth = sliderWrapper.scrollWidth;
    sliderWrapper.style.transition = 'transform 20s linear'; // Rychlost posuvu
    sliderWrapper.style.transform = `translateX(-${reviews[0].offsetWidth * reviews.length}px)`; // Posuneme o šířku všech recenzí

    // Po dokončení animace resetujeme posun na začátek
    setTimeout(() => {
        sliderWrapper.style.transition = 'none'; // Zrušíme přechod pro okamžitý posun
        sliderWrapper.style.transform = 'translateX(0)'; // Nastavíme zpět na začátek

        // Po resetu znovu spustíme animaci plynule
        setTimeout(moveReviews, 100); // Spustíme další animaci okamžitě
    }, 20000); // Po 10 sekundách (délka animace posuvu)
}

// Inicializace posuvu po načtení stránky
moveReviews();
