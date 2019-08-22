document.addEventListener('DOMContentLoaded', function() {

    const getDropdown = $('.dropdown');
    const getMenu = $('.menu');

    // 1 Dropdown Menu
    getDropdown.each(function() {
        this.addEventListener('click', function() {
            $(this).toggleClass('drop');
        });
    });

    // 2 Smooth Scrolling on internal links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Hide dropdown
            getDropdown.toggleClass('drop');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});
