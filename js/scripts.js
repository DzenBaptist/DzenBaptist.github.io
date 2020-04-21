




$(document).ready(function () {
  $('.feedbackform__close').click(function () {
    $('.feedbackform').removeClass('feedbackform_show');
  });

  $('.feedbackform__form').submit(function () {
    $('.feedbackform').removeClass('feedbackform_show');
  })
})
$(document).ready(function () {
  var N = 0;
  var time = 3;
  var isPause, tick, currentSlide = 0, percentTime = 0;

  /*$('.firstscreen__line').click(function () {
    N += 50;
    $(this).css("transform", "translateY(-" + N + "px)");
  })*/

  $('.firstscreen__screen').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    arrows: false
  })


  $('.firstscreen__screen').slick('slickNext');
  setTimeout(function () {
    $('.firstscreen__screen').slick('slickNext');
    setTimeout(function () {
      $('.firstscreen__screen').slick('slickNext');
      setTimeout(function () {
        $('.firstscreen__screen').slick('slickNext');
      }, 500);
    }, 3000);
  }, 5000);

  setInterval(function () {
    $('.firstscreen__screen').slick('slickNext');
    setTimeout(function () {
      $('.firstscreen__screen').slick('slickNext');
      setTimeout(function () {
        $('.firstscreen__screen').slick('slickNext');
        setTimeout(function () {
          $('.firstscreen__screen').slick('slickNext');
        }, 500);
      }, 3000);
    }, 5000);
  }, 15000);


  function startAnimation() {
    clearTimeout(tick);
    isPause = false;
    tick = setInterval(interval, 10);
  }

  var deltaTime = 1 / time;

  function interval() {
    if (isPause === false) {
      percentTime += deltaTime;
      if (percentTime >= 100) {
        percentTime = 0;
      }
      else if (percentTime <= 33) {
        $('.firstscreen__bannerpict').removeClass('firstscreen__bannerpict_active');
        $('.firstscreen__bannerpict').eq(0).addClass('firstscreen__bannerpict_active');
      }
      else if (percentTime <= 66) {
        $('.firstscreen__bannerpict').removeClass('firstscreen__bannerpict_active');
        $('.firstscreen__bannerpict').eq(1).addClass('firstscreen__bannerpict_active');
      }
      else {
        $('.firstscreen__bannerpict').removeClass('firstscreen__bannerpict_active');
        $('.firstscreen__bannerpict').eq(2).addClass('firstscreen__bannerpict_active');
      }
    }
  }
  startAnimation();

})

$(document).ready(function () {
	let itemText = '';

	$('.form__input_select').click(function () {
		$(this).toggleClass('form__input_open');
		$(this).siblings('.form__list').toggleClass('form__list_open');
	});

	$('.form__item').click(function () {
		let select = $(this).parent().siblings('.form__input_select');
		select.removeClass('form__input_open');
		select.text($(this).text());
		$(this).parent().removeClass('form__list_open');
		$('.form__item').removeClass('form__item_selected');
		$(this).addClass('form__item_selected');

		if (itemText == '') {
			$('.form__contact').css('display', 'flex');
			itemText = $(this).text();
			checks();
		}

		itemText = $(this).text();
		$('.form__contact').children('.form__text').text(itemText);
		$('.form__contact').children('.form__input').prop('name', itemText.toLowerCase());
	});
		
	$('.form__checkbox').prop('checked', false);
	$('.form__check').addClass('form__check_hide');

	$('.form__agree').click(function () {
		if ($(this).children('.form__checkbox').is(":checked")) {
			$(this).children('.form__checkbox').prop('checked', false);
		} else {
			$(this).children('.form__checkbox').prop('checked', true);
		};
		checks();

		$(this).find('.form__check').toggleClass('form__check_hide');
		$(this).find('.form__agreetext').toggleClass('form__agreetext_red');
	})

	function checks() {
		if (itemText != '' && $('.form__agree').children('.form__checkbox').is(":checked")) {
			$('.form__submit').prop('disabled', false);
		} else {
			$('.form__submit').prop('disabled', true);
		}
	}
})

$(document).ready(function () {
  var time = 4;
  var isPause, tick, currentSlide = 0, percentTime = 0;

	let nSlides = $('.howlook__slide').length;
	let pictSources = [];
	let pictTextes = [];
	let pictTitles = [];

	$('.howlook__slide').eq(0).attr('data-num',0);
	pictSources[0] = $('.howlook__slide').eq(0).attr('src');
	pictTextes[0] = $('.howlook__slide').eq(0).attr('data-text');
	pictTitles[0] = $('.howlook__slide').eq(0).attr('data-title');

	for (var i = 1;i < nSlides; i++) {
		$('.howlook__page').eq(0).clone().appendTo($('.howlook__pagination'));
		$('.howlook__slide').eq(i).attr('data-num',i);
		pictSources[i] = $('.howlook__slide').eq(i).attr('src');
		pictTextes[i] = $('.howlook__slide').eq(i).attr('data-text');
		pictTitles[i] = $('.howlook__slide').eq(i).attr('data-title');
	}
	$('.howlook__page').eq(0).addClass('howlook__page_active');

	let $pages = $('.howlook__page');

	$pages.click(function () {

		if (!$(this).hasClass('howlook__page_active')) {
			slideNext($(this).index());
      percentTime = 0;
      startProgressbar();
			$('.howlook__slide');
      $pages.removeClass('howlook__page_active');
      $(this).addClass('howlook__page_active');
      currentSlide = $(this).index();

		}

	})


  $('.howlook__greenblock').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
      startProgressbar();
    }
  });

  $('.howlook__slider').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
      startProgressbar();
    }
  });

	function slideNext (num) {
    let $firstSlide = $('.howlook__slider').children('.howlook__slide').eq(0);
		let $secondSlide = $('.howlook__slider').children('.howlook__slide').eq(1);
		$firstSlide.addClass('howlook__slide_change');
		$secondSlide.attr('src',pictSources[num]);
		setTimeout(function () {
			$firstSlide.appendTo($('.howlook__slider'));
			$('.howlook__slide_change').removeClass('howlook__slide_change');
			$('.howlook__text').text(pictTextes[num]);
			$('.howlook__subtitle').text(pictTitles[num]);
		},600);
	}

  function startProgressbar() {
    clearTimeout(tick);
    isPause = false;
    tick = setInterval(interval, 10);
  }

  var deltaTime = 1 / time;

  function interval() {
    if (isPause === false) {
      percentTime += deltaTime;
      if (percentTime >= 100) {
        currentSlide++;
        if (currentSlide >= nSlides) {
        	currentSlide = 0;
				}
        $pages.removeClass('howlook__page_active');
        $pages.eq(currentSlide).addClass('howlook__page_active');
      	slideNext(currentSlide);
        percentTime = 0;
        startProgressbar();
      }
    }
  }
  startProgressbar();
})
$(function() {
	$('a[href^="#"]').click(function (){
		var elementClick = $(this).attr("href");
		if (elementClick != "#"){
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
		}
		return false;
	});
});

$(document).ready(function () {
	$('.menu__link').click(function () {
		$('.menu__input').prop('checked',false);
	});
})

$(document).ready(function () {
  $('.partners__slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.partners__pagination'
  });

  $('.partners__button').click(function () {
    $('.feedbackform').addClass('feedbackform_show');
  })
})



$(document).ready(function () {
	$('.regblock__tab').click(function () {
		if (!$(this).hasClass('regblock__tab_active') && !$(this).hasClass('regblock__tab_disabled')) {
			$('.regblock__tab_active').removeClass('regblock__tab_active');
			$(this).addClass('regblock__tab_active');
			var ind = $(this).index();
			$('.regblock__title').hide();
			$('.regblock__title').eq(ind).fadeIn();
		}
	})
})
$(document).ready(function () {
  var time = 10;
  var $silder, $progress, sliderLen, isPause, tick, percentTime = 0;

  $progress = $('.why__progress');
  $silder = $('.why__slider');
  $silder.slick({
    arrows: false,
    asNavFor: $(this).find('.why__pictslider'),
    dots: true,
    appendDots: '.why__pagination',
  });

  sliderLen = $('.why__slider').width();

  $('.why__pictslider').slick({
    arrows: false,
    swipe: false
  });

  $silder.on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
      startProgressbar();
    }
  });

  $('.why__slider').on('beforeChange', function () {
    percentTime = 0;
    startProgressbar();
  });

  function startProgressbar() {
    clearTimeout(tick);
    isPause = false;
    tick = setInterval(interval, 10);
  }

  var deltaTime = 1 / time;

  function interval() {
    if (isPause === false) {
      percentTime += deltaTime;
      $progress.css({
        width: percentTime * sliderLen / 100
      });
      if (percentTime >= 100) {
        $silder.slick('slickNext');
        percentTime = 0;
        startProgressbar();
      }
    }
  }
  startProgressbar();
})

$(document).ready(function () {
	$('.tabs__tab').click(function () {
		var mySrc = $('.tabs__icon').attr('src');
		mySrc = mySrc.slice(0, mySrc.length - 5);

		if (!$(this).hasClass('tabs__tab_active')) {
			$('.tabs__tab_active').removeClass('tabs__tab_active');
			$(this).addClass('tabs__tab_active');
			var ind = $(this).index();
			$('.tabs__title').hide();
			$('.tabs__title').eq(ind).fadeIn();
			ind++;
			$('.tabs__icon').attr('src', mySrc + ind + '.svg');
		}
	})
})
$(document).ready(function () {
	$('.megabanner__logo').hover(
		function () {
			$('.megabanner__pict').addClass('megabanner__pict_active');
		},
		function () {
			$('.megabanner__pict').removeClass('megabanner__pict_active');
		}
	);
});