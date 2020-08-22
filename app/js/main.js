$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider_btn banner-section__slider_btn-left"><img src="img/icons/arr-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider_btn banner-section__slider_btn-right"><img src="img/icons/arr-right.svg" alt=""></button>',
    });

    $('.tab-switcher').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('active')
        $($(this).parent().siblings().find('div')).removeClass('active')

        $(this).addClass('active')
        $($(this).attr('href')).addClass('active')
        console.log($($(this).attr('href')));
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('active');
    })

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider_btn product-slider__slider_btn-left"><img src="img/icons/arr-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider_btn product-slider__slider_btn-right"><img src="img/icons/arr-right-black.svg" alt=""></button>',
    })


    $('.filter-style').styler();


    $('.aside-filter__item_title-drop').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle(200);
    })


    $('.price-range').ionRangeSlider({
        grid: false,
        type: 'double',
        from: 200000,
        to: 300000,

    });

});
