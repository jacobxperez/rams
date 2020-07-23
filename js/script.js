/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2020 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {

    // Accordion v1.0
    (function () {
        const getAccordion = document.querySelectorAll(".js-toggle-accordion"),
              accordionLength = getAccordion.length;

        for (let i = 0; i < accordionLength; i++) {

            getAccordion[i].addEventListener("click", function(e) {
                e.stopPropagation();

                // toggle class show
                if (this.classList.contains("show") === false) {

                    this.classList.add("show");
                    console.log("Add class show");
                    return;

                } if (this.classList.contains("show") === true) {
                    const thisChildren = this.children;

                    for (let i = 0; i < thisChildren.length; i++) {

                        if (thisChildren[i].classList.contains("accordion-box") === true) {
                            console.log("True");
                            // return;
                        }

                    } // end for loop

                    this.classList.remove("show");
                    console.log("Remove class show");
                } // last if
            });
        } // end for loop
    })();
    // end Accordion


    // Dropdown v1.0
    (function () {
        const getDropdown = document.querySelectorAll(".js-toggle-dropdown"),
              dropdownLength = getDropdown.length;

        for (let i = 0; i < dropdownLength; i++) {
            getDropdown[i].addEventListener("click", function(e) {
                e.stopPropagation();

                // toggle class show
                if (this.classList.contains("show") === false) {

                    this.classList.add("show");
                    return;

                } if (this.classList.contains("show") === true) {

                    this.classList.remove("show");

                } // last if
            });
        } // end for loop

        // Hide dropdown on window click
        document.addEventListener("click", function(e) {
            // check if target is not dropdown
            if (e.target !== getDropdown) {
                for (let i = 0; i < dropdownLength; i++) {
                    // removes class show from all dropdowns
                    getDropdown[i].classList.remove("show");
                } // end for loop
            }
        });
    })();
    // end Dropdown


    // Smooth Scroll v1.0
    (function () {
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
    // end Smooth Scroll v1.0

}); // end Script
