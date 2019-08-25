/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2019 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

    // Variables
    const intLinks = document.querySelectorAll('a[href^="#"]');
    const getDropdown = document.querySelectorAll('.dropdown');
    const dropdownLength = getDropdown.length;

    // Dropdown
    for (var i = 0; i < dropdownLength; i++) {

        getDropdown[i].addEventListener('click', function(e) {
            if (!this.classList.contains('drop')) {

                e.stopPropagation();
                this.classList.add('drop');

            } else if (this.classList.contains('drop')) {

                e.stopPropagation();
                this.classList.remove('drop');

            }

        });

    };

    // Hide dropdown on window click
    document.addEventListener('click', function(e) {
        // check if target is not dropdown
        if (e.target != getDropdown) {

            for (var i = 0; i < dropdownLength; i++) {
                // removes class drop from dropdown
                getDropdown[i].classList.remove('drop');
            };

        }

    });

    // Smooth scroll
    for (var i = 0; i < intLinks.length; i++) {
        intLinks[i].addEventListener('click', function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

        });

    };

});
