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

// END

