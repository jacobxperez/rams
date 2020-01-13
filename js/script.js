/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2020 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {

    // Variables
    const
        intLinks = document.querySelectorAll("a[href^='#']"),
        getDropdown = document.querySelectorAll(".dropdown"),
        dropdownLength = getDropdown.length;

    let
        i;

    // Dropdown v1.0
    for (i = 0; i < dropdownLength; i++) {

        getDropdown[i].addEventListener("click", function(e) {
            e.stopPropagation();

            if (!this.classList.contains("drop")) {

                this.classList.add("drop");

            } else {

                this.classList.remove("drop");

            }

        });

    }

    // Hide dropdown on window click
    document.addEventListener("click", function(e) {
        // check if target is not dropdown
        if (e.target != getDropdown) {

            for (i = 0; i < dropdownLength; i++) {
                // removes class drop from dropdown
                getDropdown[i].classList.remove("drop");
            }

        }

    });

    // Smooth scroll v1.0
    for (i = 0; i < intLinks.length; i++) {
        intLinks[i].addEventListener("click", function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});
