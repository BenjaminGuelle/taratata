// TOOLS 
const initActionNavbar = () => {
    let btnMobileOpened = document.querySelector('#btn-mobile-opened');
    btnMobileOpened.addEventListener('click', handleClickBtnMobile);
    let btnMobileClose = document.querySelector('.btn-mobile-close');
    btnMobileClose.addEventListener('click', handleClickBtnMobile);
}

const initActionPanel = () => {
    let panelLinkBoutique = document.querySelector('.panel-link-boutique');
    panelLinkBoutique.addEventListener('click', handleGetPanelMobile);
    let panelBack = document.querySelectorAll('.panel-back');
    panelBack.forEach((item) => {
        item.addEventListener('click', handlClickPanelBack);
    })
}
// END TOOLS 

const removeClassOpened = (item) => {
    item.classList.remove('panel-opened');
}
const removeClassClosed = (item) => {
    item.classList.remove('panel-closed');
}
const removeClassBack = (item) => {
    item.classList.remove('panel-back');
}
const removeClassStart = (item) => {
    item.classList.remove('panel-start');
}
const removeClassNext = (item) => {
    item.classList.remove('panel-next');
}
const removeAllClassPanel = (item) => {
    removeClassOpened(item);
    removeClassClosed(item);
    removeClassBack(item);
    removeClassStart(item);
    removeClassNext(item);
}
const addClassOpened = (item) => {
    item.classList.add('panel-opened');
}
const addClassClosed = (item) => {
    item.classList.add('panel-closed');
}
const addClassBack = (item) => {
    item.classList.add('panel-back');
}
const addClassStart = (item) => {
    item.classList.add('panel-start');
}
const addClassNext = (item) => {
    item.classList.add('panel-next');
}

// METHOD LIST

// Display menu mobile
const handleClickBtnMobile = () => {
    let menuMobile = document.querySelector('#mobile-wrapper');
    let closeIcon = document.querySelector('.close-icon');
    if (menuMobile.classList.contains('menu-opened')) {
        menuMobile.classList.remove('menu-opened');
        closeIcon.classList.remove('menu-opened');
    } else {
        menuMobile.classList.add('menu-opened');
        closeIcon.classList.add('menu-opened');
    }
}

// Animation panels menu mobile
const handleGetPanelMobile = () => {
    let panel1 = document.querySelector('#panel-1');
    let panel2 = document.querySelector('#panel-2');

    if (panel1.classList.contains('panel-closed'))
    {
        removeAllClassPanel(panel1);
        addClassOpened(panel1);
    }
    else (panel1.classList.contains('panel-opened') || panel1.classList.contains('panel-start')) 
    {
        removeAllClassPanel(panel1);
        addClassClosed(panel1);
    }
    
    if (panel2.classList.contains('panel-closed') || panel2.classList.contains('panel-next'))
    {
        removeAllClassPanel(panel2);
        addClassOpened(panel2);
    }
    else 
    {
        removeAllClassPanel(panel2);
        addClassClosed(panel2);
    }
}

const handlClickPanelBack = (e) => {
    const item = e.currentTarget;
    console.log('click back');
    const dataSetPanel = e.currentTarget.parentNode.getAttribute('data-set');
    console.log(dataSetPanel);
    let panel1 = document.querySelector('#panel-1');
    let panel2 = document.querySelector('#panel-2');

    if (dataSetPanel == 'step-2') {
        removeAllClassPanel(panel1);
        removeAllClassPanel(panel2);
        addClassStart(panel1);
        addClassNext(panel2);
        console.log('BACK OK', dataSetPanel );
    }
    else {

    }
    
}


// END METHOD LIST

