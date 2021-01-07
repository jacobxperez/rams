/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2021 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {

    // Toggle
    (function() {
        const getToggle = document.querySelectorAll(".js-toggle");
        const getToggleReset = document.querySelectorAll(".js-toggle-reset");

        for (let i = 0; i < getToggle.length; i++) {
            getToggle[i].addEventListener("click", function(e) {

                // toggle class show
                if (this.classList.contains("active") === false) {

                    this.classList.add("active");

                } else if (this.classList.contains("active") === true) {

                    this.classList.remove("active");

                } // end if block

                e.stopPropagation();
            });
        } // end for loop

        // Hide drop-box on window click
        document.addEventListener("click", function(e) {
            // check if target is not dropdown
            if (e.target !== getToggleReset) {
                for (let i = 0; i < getToggleReset.length; i++) {
                    // removes class show from all dropdowns
                    getToggleReset[i].classList.remove("active");
                } // end for loop
            }
        });
    })();
    // end Toggle


    // Smooth Scroll
    (function() {
        const intLinks = document.querySelectorAll("a[href^='#']");

        for (let i = 0; i < intLinks.length; i++) {
            intLinks[i].addEventListener("click", function(e) {

                e.preventDefault();

                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });

            });
        } // end for loop
    })();
    // end Smooth Scroll

}); // end Script
