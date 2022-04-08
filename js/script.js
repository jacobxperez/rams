/* RAMs <https://github.com/jacobxperez/rams>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    // Dropdown
    (() => {
        const getToggle = document.querySelectorAll('[data-toggle]');
        const getPop = document.querySelectorAll('[data-toggle="pop"]');
        const getToolTip = document.querySelectorAll('[data-tooltip]');

        // toggle class active
        for (let i = 0; i < getToggle.length; i++) {
            getToggle[i].addEventListener("click", function (e) {

                if (this.classList.contains("active") === false) {

                    this.classList.add("active");

                } else if (this.classList.contains("active") === true) {

                    this.classList.remove("active");

                };

                e.stopPropagation();
            });
        };

        // tooltip toogle state
        for (let i = 0; i < getToolTip.length; i++) {
            getToolTip[i].addEventListener("click", function (e) {

                if (this.classList.contains("active") === false) {

                    this.classList.add("active");

                } else if (this.classList.contains("active") === true) {

                    this.classList.remove("active");

                };

                e.stopPropagation();
            });
        };

        // Close dropdown on document click
        document.addEventListener("click", function (e) {
            for (let i = 0; i < getPop.length; i++) {
                if (e.target !== getPop[i]) {

                    getPop[i].classList.remove("active");

                };
            }

            for (let i = 0; i < getToolTip.length; i++) {
                if (e.target !== getToolTip[i]) {

                    getToolTip[i].classList.remove("active");

                };
            };
        });
    })();
    // end Dropdown


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
