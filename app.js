/*jshint esversion: 6 */
function slidesPlagin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('slide_active');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('slide_active');
    });
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('slide_active');
    });
}
}

slidesPlagin(4);
