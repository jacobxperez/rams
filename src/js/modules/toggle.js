const toggle = () => {
    const getToggle = document.querySelectorAll("[data-toggle]")

    // toggles attribute
    function toggleAttr(item) {
        item.addEventListener("click", (e) => {
            item.hasAttribute("data-state", "active") ?  item.removeAttribute("data-state") : item.setAttribute("data-state", "active")
            e.stopPropagation()
        })
    }

    getToggle.forEach(toggleAttr)

    function removeAtt(item, match, e) {
        if (e.target !== item && item.matches(match)) {
            item.removeAttribute("data-state")
        }
    }

    document.addEventListener("click", (e) => {
        getToggle.forEach((item) => removeAtt(item, '[data-toggle~="pop"]', e))
        getToggle.forEach((item) => removeAtt(item, '[data-toggle~="tooltip"]', e))
    })
}

export {toggle}
