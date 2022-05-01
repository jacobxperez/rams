/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    // toggles
function toggle() {
    const getToggle = document.querySelectorAll('[data-toggle]');
    const getTogglePop = document.querySelectorAll('[data-toggle="pop"]');
    const getToolTip = document.querySelectorAll('[data-tooltip]');

    // toggles attribute
    function toggleAttr(item) {
        item.addEventListener("click", function (e) {
            this.hasAttribute('data-state', 'active') === false ?
                this.setAttribute('data-state', 'active') :
                this.removeAttribute('data-state');
            e.stopPropagation();
        });
    }

    getToggle.forEach(toggleAttr);
    getToolTip.forEach(toggleAttr);

    // removes attribute
    function removeAtt(selector, e) {
        if (e.target !== selector) {
            selector.removeAttribute('data-state');
        }
    };

    document.addEventListener("click", function (e) {
        getTogglePop.forEach(removeAtt);
        getToolTip.forEach(removeAtt);
    });
}

toggle();

});
