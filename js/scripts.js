




$(function(){
  var scene = document.getElementById('faq');
  var parallax = new Parallax(scene);
});



$(function() {
  $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function () {
  $('.results__slider').slick({
    slidesToShow: 4,
    arrows: false
  })

  var pictSourse = '';

  $('.results__pictpart').click(function () {
    if (!$(this).parent().hasClass('results__phone')) {
      pictSourse = $('.results__phone').children('.results__slidepict').attr('src');
      pictSourse = pictSourse.replace('.gif', '.png');
      $('.results__phone').children('.results__slidepict').attr('src', pictSourse);
      $('.results__phone').removeClass('results__phone');
      $(this).addClass('results__phone');
      pictSourse = $(this).children('.results__slidepict').attr('src');
      pictSourse = pictSourse.replace('.png', '.gif');
      $(this).children('.results__slidepict').attr('src', pictSourse);
    }
  });


  $('.results__slidepict').hover(
    function () {
      pictSourse = $(this).attr('src');
      pictSourse = pictSourse.replace('.png', '.gif');
      $(this).attr('src', pictSourse);
    },
    function () {
      if (!$(this).parent().hasClass('results__phone')) {
        pictSourse = $(this).attr('src');
        pictSourse = pictSourse.replace('.gif', '.png');
        $(this).attr('src', pictSourse);
      }
    }
  );
})


$(function(){
  var scene = document.getElementById('masks');
  var parallax = new Parallax(scene);
});


