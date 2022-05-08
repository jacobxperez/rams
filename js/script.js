/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    // toggles
    function toggle() {
        const getToggle = document.querySelectorAll('[data-toggle]');
        const getToolTip = document.querySelectorAll('[data-tooltip]');

        // toggles attribute
        function toggleAttr(item) {
            item.addEventListener("click", e => {
                item.hasAttribute('data-state', 'active') === false ?
                    item.setAttribute('data-state', 'active') :
                    item.removeAttribute('data-state');
                e.stopPropagation();
            })
        }

        getToggle.forEach(toggleAttr);
        getToolTip.forEach(toggleAttr);

        document.addEventListener("click", e => {
            getToggle.forEach(item => {
                if (e.target !== item && item.matches('[data-toggle="pop"]')) {
                    item.removeAttribute('data-state');
                }
            });
            getToolTip.forEach(item => {
                if (e.target !== item) {
                    item.removeAttribute('data-state');
                }
            });
        })
    }

    toggle();

});
