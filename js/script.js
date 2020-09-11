$(function () {
	/* BTN */
	const btnUp = $('.btnUp');
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
	const navMobile = $('.nav_flex');
	$('.menuMobile').on('click', function (evt) {
		evt.preventDefault();
		if ($(navMobile).css('display') == 'block') {
			$(navMobile).hide(300);
		} else {
			$(navMobile).show(300);
		}
	})

	$(window).resize(function () {
		if ($(this).width() > 992) {
			$(navMobile).show(300);
		}
	});
	/* Переходы по ссылкам */
	$('.nav_link').on('click', function (evt) {
		evt.preventDefault();
		let elem = $($(this).attr('href'));

		$('html').animate({
			scrollTop: elem.offset().top - 70,
		}, 500)

		if ($(window).width() < 992) {
			$(navMobile).hide(300);
		}
	})
})