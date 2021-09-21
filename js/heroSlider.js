/***********************************
 ************ ADD EVENTS ***********
 ***********************************
 */

 // ----- hero slider event
 const initActionSlider = () => {
     const slider = document.querySelector('.slider');
     const sliderBtns = document.querySelectorAll('.hero-slider-btn');
     sliderBtns.forEach((item) => {
        item.addEventListener('click', handleSliderBtn);
     });
 }



 /***********************************
 *********** METHOD LIST ***********
 ***********************************
 */

 const handleSliderBtn = (e) => {
    const targetSlideHero = e.currentTarget.getAttribute('data-slide-target');
    console.log('DATA SLIDE TARGET', targetSlideHero);
    console.log('ALL SLIDE', getAllHeroSlideItem());
    console.log('CURRENT SLIDE', getCurrentHeroSlideItem());

    if (getAllHeroSlideItem().length > targetSlideHero) {
        getCurrentHeroSlideItem().classList.remove('active');
        getAllHeroSlideItem()[targetSlideHero].classList.add('active');
    }
}