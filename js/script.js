document.addEventListener('DOMContentLoaded', function() {

	const getDropdown = $('.dropdown');
	const getMenu = $('.menu');


	// 1 Dropdown Menu
	getDropdown.each(function() {
		$(this).on('click', function() {
			$(this).children('.menu').slideToggle(500);
		});
	}); // end of dropdown menu


	// 2 Smooth Scrolling on internal links
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			// Hide menu on internal links
			getMenu.slideUp(500);

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	}); // end Smooth Scrolling

});
