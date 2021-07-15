console.log('Hello ben');

// BTN 
let btnMobileOpened = document.querySelector('#btn-mobile-opened');
let btnMobileClose = document.querySelector('.btn-mobile-close');

// ELEMENTS
let menuMobile = document.querySelector('#mobile-wrapper');
let closeIcon = document.querySelector('.close-icon');

// console.log(btnMobileOpened);

btnMobileOpened.addEventListener('click', handleClickBtnMobile);
btnMobileClose.addEventListener('click', handleClickBtnMobile);

function handleClickBtnMobile() {
    if (menuMobile.classList.contains('menu-opened')) {
        menuMobile.classList.remove('menu-opened');
        closeIcon.classList.remove('menu-opened');
    } else {
        menuMobile.classList.add('menu-opened');
        closeIcon.classList.add('menu-opened');
    }

}