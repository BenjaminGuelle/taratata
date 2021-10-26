new Splide( '.splide', {
    perPage: 3,
    breakpoints: {
        '640': {
            perPage: 2,
            gap    : '1rem',
        },
        '480': {
            perPage: 1,
            gap    : '1rem',
        },
    }
} ).mount();

new Splide( '.splide-single', {
    perPage: 1
} ).mount();