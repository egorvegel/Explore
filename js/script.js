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
	/* Скрываем моб меню при ширине больше 922 */
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

	/* Анимация при прокрутке (скролле) страницы */
	const animItems = $('.anim_item');
	if (animItems.length > 0) {
		$(window).on('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = $(animItem).height();
				const animItemOffset = $(animItem).offset().top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
					$(animItem).addClass('active');
				} else {
					$(animItem).addClass('remove');
				}
			}
		}
	}
	animOnScroll();
})