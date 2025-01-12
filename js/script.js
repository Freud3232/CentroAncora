// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const heroSwiper = new Swiper("#hero-swiper", {
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});