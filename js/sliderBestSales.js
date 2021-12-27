new Splide( '.splide', {
    perPage: 4,
    gap    : '1rem',
    breakpoints: {
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
    pagination: false,
} ).mount();

new Splide( '.splide-single', {
    perPage: 1
} ).mount();