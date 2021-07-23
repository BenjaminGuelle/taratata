
// PANEL : add / remove class to slide

// Remove transition 
const removePanelOpened = (item) => {
    item.classList.remove('panel-opened');
}
const removePanelClosed = (item) => {
    item.classList.remove('panel-closed');
}
const removeStartLeft = (item) => {
    item.classList.remove('start-left');
}
const removeLeftStart = (item) => {
    item.classList.remove('left-start');
}
const removeStartRight = (item) => {
    item.classList.remove('start-right');
}
const removeRightStart = (item) => {
    item.classList.remove('right-start');
}
const removeAllClassPanel = (item) => {
    removePanelOpened(item);
    removePanelClosed(item);
    removeStartLeft(item);
    removeLeftStart(item);
    removeStartRight(item);
    removeRightStart(item);
}

// Add transition 
const addPanelOpened = (item) => {
    item.classList.add('panel-opened');
}
const addPanelClosed = (item) => {
    item.classList.add('panel-closed');
}
const addStartLeft = (item) => {
    item.classList.add('start-left');
}
const addLeftStart = (item) => {
    item.classList.add('left-start');
}
const addStartRight = (item) => {
    item.classList.add('start-right');
}
const addRightStart = (item) => {
    item.classList.add('right-start');
}

// Restart panel menu mobile
const restartMenuMobile = () => {
    setTimeout(() => {
        getAllPanel().forEach((item) => {
            if (item.getAttribute('data-panel') != 'panel-1') 
            {
                removeAllClassPanel(item);
                addPanelClosed(item);
            }
            else 
            {
                removeAllClassPanel(item);
                addPanelOpened(getCurrentPanel('panel-1'));
            }
        })
    }, 500);   
}

// get panel next
const getPanelNext = (item) => {
    return document.getElementById(item);
}
// get current panel
const getCurrentPanel = (item) => {
    return document.getElementById(item);
}
// get all panel
const getAllPanel = () => {
    return document.querySelectorAll('.panel');
}