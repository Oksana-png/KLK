// document.addEventListener('mousemove', (e) => {
//   console.log(e);
// })

// const slid = new Swiper('.tariff-cards', {
//   loop: true,
//   // If we need pagination

// });

const slider = document.querySelector('.tariff-cards');
let mySwiper;

function mobileSlider() {

  if (window.innerWidth <= 767) {
    mySwiper = new Swiper('.tariff-cards', {
      loop: true,
      // If we need pagination
      autoplay: {
        delay: 5000,
      },
    });
    

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  };
}


mobileSlider();

window.addEventListener('resize', mobileSlider);