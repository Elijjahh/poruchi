import '../scss/main.scss';

import Swiper from 'swiper';
// @ts-expect-error импорт css, не знаю, чего он ругается
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__menu');

  if (hamburger && menu) {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      if (target.getAttribute('href') == '#faq' && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }

      if (!menu.contains(target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }

      if (hamburger.contains(target) && !menu.classList.contains('active')) {
        menu.classList.add('active');
      }
    });
  }
});

new Swiper('#delivery .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

new Swiper('#places .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

// @ts-expect-error no types there
import SnapSlider from '@tannerhodges/snap-slider';

const elementToShowHide = document.querySelector('.header');

const slider = new SnapSlider('.main', {
  id: 'sections',
  slides: '',
  start: 1,
  loop: false,
  on: {
    load: () => {},
    change: () => {
      if (!elementToShowHide) return;

      const menu = document.querySelector('.header__menu');
      if (menu?.classList.contains('active')) {
        menu.classList.remove('active');
      }

      if (slider.getCurrentSlide().id !== 'promo') {
        elementToShowHide.classList.add('active');
      } else {
        elementToShowHide.classList.remove('active');
      }
    },
  },
});
