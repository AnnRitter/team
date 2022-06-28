const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          
        },
        735: {
            slidesPerView: 1.5,
        },
        1000: {
          slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2.5,
        }, 
        1500: {
          slidesPerView: 3.5,
          
        },
        
      }


});
