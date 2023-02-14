/* @license
 * RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *****************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
    const toggle = () => {
        const getToggle = document.querySelectorAll("[data-toggle]")
        const getToolTip = document.querySelectorAll("[data-tooltip]")

        // toggles attribute
        function toggleAttr(item) {
            item.addEventListener("click", (e) => {
                !item.hasAttribute("data-state", "active")
                    ? item.setAttribute("data-state", "active")
                    : item.removeAttribute("data-state")
                e.stopPropagation()
            })
        }

        getToggle.forEach(toggleAttr)
        getToolTip.forEach(toggleAttr)

        function removeAtt(item, match, e) {
            if (e.target !== item && item.matches(match)) {
                item.removeAttribute("data-state")
            }
        }

        document.addEventListener("click", (e) => {
            getToggle.forEach((item) =>
                removeAtt(item, '[data-toggle="pop"]', e)
            )
            getToolTip.forEach((item) => removeAtt(item, "[data-tooltip]", e))
        })
    }

    toggle()
})
