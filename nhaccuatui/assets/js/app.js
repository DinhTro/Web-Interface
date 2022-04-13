$('.slider-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '110px',
    draggable: false,
    swipe: true,
    edge: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});

var search = document.querySelector('.search-history__list')
search.onmousedown = function(e) {
        e.preventDefault();
    };
    