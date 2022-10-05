// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });

var swiper = new Swiper(".mySwiper", {
        sliderPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    