import '../scss/main.scss';

import Swiper from 'swiper';
// @ts-expect-error импорт css, не знаю, чего он ругается
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

    document.addEventListener('scroll', (_event) => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  }
});

new Swiper('#complexes .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 25,
});

new Swiper('#delivery .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

new Swiper('#places .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

const accordions = document.getElementsByClassName('faq__accordion-item');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', () => {
    for (const ac of accordions) {
      ac.classList.remove('active');
    }
    accordions[i].classList.toggle('active');
  });
}
