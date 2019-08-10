$(function () {

	// 1 Dropdown Menu
	$('.dropdown').each(function () {
		$(this).on('click', function () {
			$(this)
				.children('.menu')
				.slideToggle(500);
		});
	}); // end of dropdown menu


	// 2 Hide menu on scroll
	$(window).on('scroll', function () {
		var menu = $('.menu');
		menu.slideUp(500);
	}); // end hide menu on scroll


	// 3 Smooth Scrolling on internal links
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	}); // end Smooth Scrolling

});
