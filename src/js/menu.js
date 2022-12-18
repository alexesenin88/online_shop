"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.header__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__menu_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_active');
            menu.classList.toggle('menu_active');
        });
    });
});