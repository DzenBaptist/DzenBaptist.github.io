
$(document).ready(function(){
    $('.js-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.js-prev'),
        nextArrow: $('.js-next'),
        appendDots: $('.js-pagination')
    });

    $('.form__check-input').prop('checked', false);

    $('.form__check-input').click(function(){
        $('.form__btn').prop("disabled", !$('.form__btn').prop("disabled"));
    });
});