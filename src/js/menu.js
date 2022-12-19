"use strict";

let headerBars = document.querySelector('.header__menu'),
    menu = document.querySelector('.menu'),
    promoDark = document.querySelector('.promo__dark'),
    menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    menu.classList.toggle('hidden');
    promoDark.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);