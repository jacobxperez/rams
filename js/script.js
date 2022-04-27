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
    
        function toggle(trigger) {
            trigger.hasAttribute('data-state', 'active') === false ?
                trigger.setAttribute('data-state', 'active') :
                trigger.removeAttribute('data-state');
        }
    
        // toggle dropdwon
        for (let i = 0; i < getToggle.length; i++) {
            getToggle[i].addEventListener("click", function (e) {
                toggle(this);
                e.stopPropagation();
            })
        }
    
        // toggle tooltip
        for (let i = 0; i < getToolTip.length; i++) {
            getToolTip[i].addEventListener("click", function (e) {
                toggle(this);
                e.stopPropagation();
            })
        };
    
        // Close dropdown and tooltips on document click
        document.addEventListener("click", function (e) {
            for (let i = 0; i < getPop.length; i++) {
                if (e.target !== getPop[i]) {
                    getPop[i].removeAttribute('data-state');
                }
            }
    
            for (let i = 0; i < getToolTip.length; i++) {
                if (e.target !== getToolTip[i]) {
                    getToolTip[i].removeAttribute('data-state');
                }
            }
        });
    };

    dropDown();

});
