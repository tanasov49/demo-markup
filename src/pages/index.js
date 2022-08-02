import './index.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.section-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.section-two__button-swiper_next',
        prevEl: '.section-two__button-swiper_prev',
      },
    
});
