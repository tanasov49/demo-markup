import './index.scss';
import Swiper from 'swiper';
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
});
