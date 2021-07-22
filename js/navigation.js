// ADD EVENTS
const initActionNavbar = () => {
    let btnMobileOpened = document.querySelector('#btn-mobile-opened');
    btnMobileOpened.addEventListener('click', handleClickBtnMobile);
    let btnMobileClose = document.querySelector('.btn-mobile-close');
    btnMobileClose.addEventListener('click', handleClickBtnMobile);
}

const initActionPanel = () => {
    let panelNext = document.querySelectorAll('.panel-next');
    panelNext.forEach((item) => (
        item.addEventListener('click', handleSwitchPanel)
    ));
    let panelBack = document.querySelectorAll('.panel-back');
    panelBack.forEach((item) => {
        item.addEventListener('click', handleSwitchPanel);
    });
}

const initHoverSubmenu = () => {
    let linkBoutique = document.querySelector('#hover-boutique');
    linkBoutique.addEventListener('mouseover', handleHoverSubmenu);
}
// END 

// METHOD LIST

// Display menu mobile
const handleClickBtnMobile = () => {
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
    const currentPanel = e.currentTarget.getAttribute('data-panel');
    const targetPanel = e.currentTarget.getAttribute('data-target');

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

let submenuItems = document.querySelectorAll('.submenu-list .submenu-item');
let submenuItems1 = document.querySelectorAll('.submenu-list-1 .submenu-item');
let submenuItems2 = document.querySelectorAll('.submenu-list-2 .submenu-item');

const timelineConfig = () => {
    for (let i = 0; i < submenuItems.length; i++) {
        if (i < submenuItems1.length ) {
            TL.to(submenuItems[i], {duration: 0.2})
        } else if (i == submenuItems1.length) {
            TL.to(submenuItems[i], {duration: 0.2}, 0);
        } else {
            TL.to(submenuItems[i], {duration: 0.2}, '>')
        }
    }
}

const TL = gsap.timeline({
    defaults: {
        // duration: 0.2,
        ease: "power2",
        autoAlpha: 1,
        y: 0,
    },
    paused: true,
    onStart: () => console.log('ANIME START'),
    onComplete: () => console.log('ANIME FINI')
});

TL
.add(timelineConfig())


// Submenu
const handleHoverSubmenu = () => {
    TL.restart()
    console.log('submenu 1', submenuItems1);
    console.log('submenu 2', submenuItems2);
}
