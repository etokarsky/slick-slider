$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		speed: 1000,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		infinite: false,
		pauseOnDotsHover: true,
		draggable: true, // drag на ПК
		swipe: true, // drag на мобильных телефонах
		touchThreshold: 10, // чем выше значение, тем на меньшее расстояние должен смахнуть пользователь для осуществления свайпа
		touchMove: true, // при отключении данного параметра пользователь не сможет двигать слайды, но по-прежнему сможем свайпать
		waitForAnimate: false, // определяет, будут ли ждать кнопки завершения анимации свайпа (например, при быстром нажатии)
		centerMode: true, // активный слайд всегда становится по центру (в CSS есть вариант использования данной опции)
		variableWidth: false, // каждый слайдер занимает ширину по ширине внутренней картинки (получаем разные ширины слайдов)
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});