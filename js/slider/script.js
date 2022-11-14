const swiper = new Swiper('.image-slider', {
    // slidesPerView: 3,
    //   slidesPerColumn: 2,
    //   slidesPerColumnFill:"row",
    // slidesPerView: 1,
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
    Keyboard:{ 
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});

