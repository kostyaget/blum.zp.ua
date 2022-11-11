const swiper = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteration: false
    },
    speed: 600,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

