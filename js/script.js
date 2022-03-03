/* RAMs <https://github.com/jacobxperez/rams>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    // Dropdown Toggle
    (() => {
        const getDropDown = document.querySelectorAll('[data-dropdown]');

        // toggle class active
        for (let i = 0; i < getDropDown.length; i++) {
            getDropDown[i].addEventListener("click", function (e) {

                if (this.classList.contains("active") === false) {

                    this.classList.add("active");

                } else if (this.classList.contains("active") === true) {

                    this.classList.remove("active");

                };

                e.stopPropagation();
            });
        };

        // Close dropdown menu on document click
        document.addEventListener("click", function (e) {
            for (let i = 0; i < getDropDown.length; i++) {

                if (e.target !== getDropDown[i].hasAttribute("menu")) {

                    getDropDown[i].classList.remove("active").hasAttribute("menu");

                };

            };
        });

    })();
    // end Dropdown Toggle


    // Smooth Scroll
    (() => {
        const intLinks = document.querySelectorAll("a[href^='#']");

        for (let i = 0; i < intLinks.length; i++) {
            intLinks[i].addEventListener("click", function (e) {

                e.preventDefault();

                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });

            });
        };
    })();
    // end Smooth Scroll

});
