// TOOLS 
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
// END TOOLS 

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
const handleSwitchPanel = (e) => {
    //TODO make function to display panel
    // list panel
    const panelList = document.querySelectorAll('.panel');
    
    // data set
    const chevron = e.currentTarget;
    const currentPanel = e.currentTarget.getAttribute('data-panel');
    const targetPanel = e.currentTarget.getAttribute('data-target');

    console.log(chevron);
    // function
    if ((getPanelNext(targetPanel) != undefined) && (getCurrentPanel(currentPanel) != undefined ))
    {
        console.log('CLICK PANEL NEXT');
        removeAllClassPanel(getCurrentPanel(currentPanel));
        removeAllClassPanel(getPanelNext(targetPanel));
        addStartLeft(getCurrentPanel(currentPanel));
        addRightStart(getPanelNext(targetPanel));
        addPanelOpened(getPanelNext(targetPanel));
        addPanelClosed(getCurrentPanel(currentPanel));
    }
    
    // click boutique panel 1 => switch panel 2
    // click back panel 2 => switch panel 1

    // click a ne pas rater panel 2 => switch panel 3
    // click back panel 3 => switch panel 2

    // click bijoux panel 2 => switch panel 4
    // click back panel 4 => switch panel 2

    // click collections panel 2 => switch panel 5
    // click back panel 5 => switch panel 2
}
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

// panel

