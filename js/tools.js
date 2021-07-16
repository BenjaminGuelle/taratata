// PANEL : add / remove class to slide
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

// get panel next
const getPanelNext = (item) => {
    return document.getElementById(item);
}
// get current panel
const getCurrentPanel = (item) => {
    return document.getElementById(item);
}