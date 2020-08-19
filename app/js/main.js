$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider_btn banner-section__slider_btn-left"><img src="img/icons/arr-left.svg" alt=""></button>\n',
        nextArrow: '<button class="banner-section__slider_btn banner-section__slider_btn-right"><img src="img/icons/arr-right.svg" alt=""></button>\n',
    });

    $('.search-tabs__item').on('click', function (e) {
        e.preventDefault();
        $('.search-tabs__item').removeClass('active')
        $('.search-content__item').removeClass('active')

        $(this).addClass('active')
        $($(this).attr('href')).addClass('active')
        console.log($($(this).attr('href')));
    });
});
