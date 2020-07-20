/* Essentials <https://github.com/jacobxperez/essentials>
 * Copyright (C) 2020 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {

    // Var counter
    let i;

    // Accordion v1.0
    const
        getAccordion = document.querySelectorAll(".js-dropdown-accordion"),
        accordionLength = getAccordion.length;

    for (i = 0; i < accordionLength; i++) {

        getAccordion[i].addEventListener("click", function(e) {
            e.stopPropagation();

            // add class show
            if (this.classList.contains("show") === false) {

                this.classList.add("show");
                console.log("Add class show");

            } else {
                const thisChildren = this.children;

                if (this.classList.contains("show") === true) {

                    for (i = 0; i < thisChildren.length; i++) {

                        if (thisChildren[i].classList.contains("accordion-box") === true) {
                            console.log("True");
                        }

                    }

                    this.classList.remove("show");
                    console.log("Remove class show");
                }

            }
        });

    }

    // Dropdown v1.0
    const
        getDropdown = document.querySelectorAll(".js-dropdown"),
        dropdownLength = getDropdown.length;

    for (i = 0; i < dropdownLength; i++) {

        getDropdown[i].addEventListener("click", function(e) {
            e.stopPropagation();

            // add class show
            if (!this.classList.contains("show")) {

                this.classList.add("show");

            } else {

                this.classList.remove("show");

            }
        });

    }

    // Hide dropdown on window click
    document.addEventListener("click", function(e) {
        // check if target is not dropdown
        if (e.target !== getDropdown) {
            for (i = 0; i < dropdownLength; i++) {
                // removes class drop from all dropdowns
                getDropdown[i].classList.remove("show");
            }
        }

    });

    // Smooth scroll v1.0
    const intLinks = document.querySelectorAll("a[href^='#']");

    for (i = 0; i < intLinks.length; i++) {
        intLinks[i].addEventListener("click", function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});
