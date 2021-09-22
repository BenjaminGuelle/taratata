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
    const currentBtn = e.currentTarget;
    const lastBtnActive = document.querySelector('#hero .hero-slider-btn.active');
    console.log(currentBtn);
    console.log(lastBtnActive);

    if (getAllHeroSlideItem() != undefined || targetSlideHero != undefined) {
        if (getAllHeroSlideItem().length > targetSlideHero) {
            // TLHeroSlider.restart();
            handleHeroSliderTl();
            getCurrentHeroSlideItem().classList.remove('active');
            getAllHeroSlideItem()[targetSlideHero].classList.add('active');
            lastBtnActive.classList.remove('active');
            currentBtn.classList.add('active');
        }
    }
}

/***********************************
 ************ Timelines ************
 ***********************************
 */
const heroSliderPicture = document.querySelectorAll('.hero-slider-start');
const heroSliderFace = document.querySelectorAll('.hero-slider-content-box');
const heroSliderTextContent = document.querySelectorAll('.hero-slider-content-txt');
const heroSliderHTop = document.querySelectorAll('.hero-slider-title-top');
const heroSliderTitleDesktop = document.querySelectorAll('.hero-slider-title-desktop');

if (window.matchMedia("(orientation: landscape)").matches) {
    console.log('orientation landscape');
    TLHeroSliderLandscape = gsap.timeline({
        onStart: () => console.log('START TLHeroSliderLandscape'),
        onComplete: () => console.log('COMPLETE TLHeroSliderLandscape'),
     });
    
     TLHeroSliderLandscape
     .to(heroSliderPicture, {duration: 1, opacity: 1})
     .to(heroSliderFace, {x: -200, duration: 1, opacity: 1}) 
}
else {
    console.log('orientation portarait')
    TLHeroSliderPortrait = gsap.timeline({
        onStart: () => console.log('START TLHeroSliderPortrait'),
        onComplete: () => console.log('COMPLETE TLHeroSliderPortrait'),
     });
    
     TLHeroSliderPortrait
     .to(heroSliderPicture, {duration: 1, opacity: 1})
     .to(heroSliderFace, {y: -80, duration: 1, opacity: 1})
}

const handleHeroSliderTl = () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
        TLHeroSliderLandscape.restart();
    }
    else {
        TLHeroSliderPortrait.restart();
    }
}