
const splide2 = new Splide( '.splide-single', {
    perPage: 1,
    breakpoints: {
        '992': {
            perPage: 3
        },
        '768': {
            perPage: 2
        },
        '481': {
            perPage: 1
        },
    },
    arrows: false,
    pagination: true,
 } ).mount();