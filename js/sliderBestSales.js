const splide = new Splide( '.splide', {
    perPage: 4,
    gap    : '1rem',
    breakpoints: {
        '1024': {
            perPage: 4,
            gap    : '1rem',
        },
        '992': {
            perPage: 3,
            gap    : '1rem',
        },
        '768': {
            perPage: 2,
            gap    : '1rem',
        },
        '480': {
            perPage: 1,
            gap    : '1rem',
        },
    },
    arrows: false,
    pagination: true,
} ).mount();

/* 
const splide2 = new Splide( '.splide-single', {
    perPage: 1,
    arrows: false,
    pagination: true,
} ).mount(); */