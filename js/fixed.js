var swiper = new Swiper(".mySwiper", {
     
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,

    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPreView:"auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifiar: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },

});



