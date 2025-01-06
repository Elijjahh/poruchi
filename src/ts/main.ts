import '../scss/main.scss';

import Swiper from 'swiper';
import 'swiper/css';

const elementToShowHide = document.querySelector('.header');

function checkScrollPosition() {
  const scrollY = window.scrollY;

  if (elementToShowHide) {
    if (scrollY > 200) {
      elementToShowHide.classList.add('active');
    } else {
      elementToShowHide.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', checkScrollPosition);

checkScrollPosition();

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
