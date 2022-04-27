/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    const dropDown = () => {
        const getToggle = document.querySelectorAll('[data-toggle]');
        const getPop = document.querySelectorAll('[data-toggle="pop"]');
        const getToolTip = document.querySelectorAll('[data-tooltip]');

        // toggles attribute
        function toggleAttr(selector) {
            for (let i = 0; i < selector.length; i++) {
                selector[i].addEventListener("click", function (e) {
                    this.hasAttribute('data-state', 'active') === false ?
                        this.setAttribute('data-state', 'active') :
                        this.removeAttribute('data-state');

                    e.stopPropagation();
                })
            }
        };

        toggleAttr(getToggle);
        toggleAttr(getToolTip);

        // removes attribute
        function removeAtt(event, selector) {
            for (let i = 0; i < selector.length; i++) {
                if (event.target !== selector[i]) {
                    selector[i].removeAttribute('data-state');
                }
            }
        };

        // Close dropdown and tooltips on document click
        document.addEventListener("click", function (e) {
            removeAtt(e, getPop);
            removeAtt(e, getToolTip);
        });
    };

    dropDown();

});
