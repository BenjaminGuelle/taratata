/***********************************
 ************ ADD EVENTS ***********
 ***********************************
 */

 // ----- hero slider event
 const initActionSlider = () => {
     const slider = document.querySelector('.slider');
     const sliderBtns = document.querySelectorAll('.slider-btn');
     sliderBtns.forEach((item) => {
        item.addEventListener('click', handleSliderBtn);
     });
 }



 /***********************************
 *********** METHOD LIST ***********
 ***********************************
 */

 const handleSliderBtn = (e) => {
    console.log('CLICK BTN SLIDER');
    const currentBtnSlideHero = e.currentTarget;
    const currentDataTargetSlideHero = e.currentTarget.getAttribute('data-slide-target');
    console.log('SLIDE TARGET', currentDataTargetSlideHero);

    console.log(getCurrentSlideItem());

}