
$(document).ready(function(){
    $('.items--mobile').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.js-prev'),
        nextArrow: $('.js-next'),
        appendDots: $('.js-pagination')
    });

    $('.form__text').click(function () {
        $('.form__check-input').trigger('click');
    });

    $('.form__check-input').click(function () {
        $('.form__btn').prop("disabled", !$('.form__btn').prop("disabled"));
    })

    $('.form__check-input').prop('checked',false);
});