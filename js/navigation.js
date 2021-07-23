/***********************************
 ************ ADD EVENTS ***********
 ***********************************
 */

// ----- navbar event
const initActionNavbar = () => {
    let btnMobileOpened = document.querySelector('#btn-mobile-opened');
    btnMobileOpened.addEventListener('click', handleClickBtnMobile);
    // menu mobile
    let btnMobileClose = document.querySelector('.btn-mobile-close');
    btnMobileClose.addEventListener('click', handleClickBtnMobile);
}

// ----- panel event
const initActionPanel = () => {
    let panelNext = document.querySelectorAll('.panel-next');
    panelNext.forEach((item) => (
        item.addEventListener('click', handleSwitchPanel)
    ));
    let panelBack = document.querySelectorAll('.panel-back');
    panelBack.forEach((item) => {
        item.addEventListener('click', handleSwitchPanel);
    });
    // event to anim back first panel menu mobile
    let animBackFirstPanel = document.querySelector('#panel-back-first');
    animBackFirstPanel.addEventListener('click', handleSwitchBackAnim);
}

// ----- submenu event
const initHoverSubmenu = () => {
    let linkBoutique = document.querySelector('#hover-boutique');
    linkBoutique.addEventListener('mouseover', handleHoverSubmenu);
}

// ----- sidebar event
const initActionSidebar = () => {
    let linkSignin = document.querySelector('.link-signup');
    linkSignin.addEventListener('click', handleOpenSidebarSignin);
    let btnSidebarClose = document.querySelector('.btn-sidebar-close');
    btnSidebarClose.addEventListener('click', handleCloseSidebarSignin);
}

/***********************************
 *********** METHOD LIST ***********
 ***********************************
 */

// Display menu mobile
const handleClickBtnMobile = () => {
    TLFadeMobile.restart();
    let menuMobile = document.querySelector('#mobile-wrapper');
    let closeIcon = document.querySelector('.close-icon');
    if (menuMobile.classList.contains('menu-opened')) {
        menuMobile.classList.remove('menu-opened');
        closeIcon.classList.remove('menu-opened');
        restartMenuMobile();
    } else {
        menuMobile.classList.add('menu-opened');
        closeIcon.classList.add('menu-opened');
    }
}

// Animation panels menu mobile
const handleSwitchPanel = (e) => {
    // data set
    let currentPanel = e.currentTarget.getAttribute('data-panel');
    let targetPanel = e.currentTarget.getAttribute('data-target');

    // function to switch
    if ((getPanelNext(targetPanel) != undefined) && (getCurrentPanel(currentPanel) != undefined ))
    {
        removeAllClassPanel(getCurrentPanel(currentPanel));
        removeAllClassPanel(getPanelNext(targetPanel));
        addPanelOpened(getPanelNext(targetPanel));
        addPanelClosed(getCurrentPanel(currentPanel));

        if (currentPanel === 'panel-1' && targetPanel === 'panel-2') 
        {
            addStartLeft(getCurrentPanel(currentPanel));
            addRightStart(getPanelNext(targetPanel));
        }
        else if (currentPanel === 'panel-2' && (targetPanel === 'panel-3' || targetPanel === 'panel-4' || targetPanel === 'panel-5'))
        {
            addStartLeft(getCurrentPanel(currentPanel));
            addRightStart(getPanelNext(targetPanel));
        }
        else if ((currentPanel === 'panel-3' || currentPanel === 'panel-4' || currentPanel === 'panel-5') && targetPanel === 'panel-2')
        {
            addStartRight(getCurrentPanel(currentPanel));
            addLeftStart(getPanelNext(targetPanel));
        }
        else {
            addStartRight(getCurrentPanel(currentPanel));
            addLeftStart(getPanelNext(targetPanel));
        }      
    }
}

// Animation to switch back panel mobile
const handleSwitchBackAnim = () => {
    TLFadeMobile.restart();
}

// Animation hover submenu
const handleHoverSubmenu = () => {
    TLFadeSub.restart();
}

// Animation slide sidebar
const handleOpenSidebarSignin = (e) => {
    const btnOpenSidebar = e.currentTarget;
    console.log(btnOpenSidebar);
    TLSideBar.restart();
}

/***********************************
 ************ Timelines ************
 ***********************************
 */

 // ----- Submenu animation
let submenuItems1 = document.querySelectorAll('.submenu-list-1 .submenu-item');
let submenuItems2 = document.querySelectorAll('.submenu-list-2 .submenu-item');
let submenuSliderTitle = document.querySelector('.submenu-collection .submenu-item');
let submenuSlider = document.querySelector('.submenu-collection .slider-collection');

const TLFadeSub = gsap.timeline({
    paused: true,
    onStart: () => console.log('START FADE SUB'),
    onComplete: () => console.log('COMPLETE FADE SUB'),
})

TLFadeSub
.to(submenuItems1, {autoAlpha: 1, y: 0, delay: 0.25, duration: 0.20, stagger: 0.1})
.to(submenuItems2, {autoAlpha: 1, y: 0, delay: 0.25, duration: 0.20, stagger: 0.1}, '0')
.to(submenuSliderTitle, {autoAlpha: 1, y: 0, delay: 0.25, duration: 0.20}, '0')
.to(submenuSlider, {autoAlpha: 1, duration: 0.30}, '-=0.50')

// ----- Menu mobile animation
let btnMobileClose = document.querySelector('.btn-mobile-close');
let panelList = document.querySelectorAll('.panel-list-1 .panel-item');
let panelLine = document.querySelector('.panel-br');

const TLFadeMobile = gsap.timeline({
    paused: true,
    onStart: () => console.log('START MENU MOBILE'),
    onComplete: () => console.log('COMPLETE MENU MOBILE'),
})

TLFadeMobile
.to(btnMobileClose, {autoAlpha: 1, delay: 0.2, duration: 0.5})
.to(panelList, {autoAlpha: 1, delay: 0.2, duration: 0.5, stagger: 0.15}, 0)
.to(panelLine, {autoAlpha: 1, width: '100%', delay: 0.5, duration: 0.50}, '-=0.75')

// ----- Open slide sidebar
let sideBar = document.querySelector('.sidebar-signin');

const TLSideBar = gsap.timeline({
    paused: true,
    onStart: () => console.log('START SIDEBAR'),
    onComplete: () => console.log('COMPLETE SIDEBAR'),
});

TLSideBar
.to(sideBar, {autoAlpha: 1, x: 0, duration: 0.3})