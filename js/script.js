$(function () {
	/* BTN */
	let btnUp = $('.btnUp');
	$(btnUp).on('click', function (evt) {
		evt.preventDefault();

		$('html').animate({
			scrollTop: 0,
		}, 300)
	})

	function checkBtn() {
		if ($(this).scrollTop() > 900) {
			$(btnUp).removeClass('unvisible');
		} else {
			$(btnUp).addClass('unvisible');
		}
	}

	checkBtn();
	$(window).on('scroll', function () {
		checkBtn();
	})

	/* Меню */
	$('.menuMobile').on('click', function (evt) {
		evt.preventDefault();
		if ($(".nav_flex").css('display') == 'block') {
			$('.nav_flex').hide(300);
		} else {
			$('.nav_flex').show(300);
		}
	})

	$(window).resize(function () {
		console.log(1);
		if ($(this).width() > 992) {
			$('.nav_flex').show(300);
		}
	});
	/* Переходы по ссылкам */
	$('.nav_link').on('click', function (evt) {
		evt.preventDefault();
		let elem = $($(this).attr('href'));

		$('html').animate({
			scrollTop: elem.offset().top - 100,
		}, 500)

		if ($(window).width() < 992) {
			$('.nav_flex').hide(300);
		}
	})
})