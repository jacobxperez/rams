const toggle = () => {
    const getToggle = document.querySelectorAll('[data-toggle]')

    // toggles attribute
    function toggleAttr(item) {
        item.addEventListener('click', (e) => {
            item.hasAttribute('data-state', 'active')
                ? item.removeAttribute('data-state')
                : item.setAttribute('data-state', 'active')
            e.stopPropagation()
        })
    }

    getToggle.forEach(toggleAttr)

    // remove active state
    function removeAtt(item, e) {
        if (
            (e.target !== item && item.matches('[data-toggle~="pop"]')) ||
            item.matches('[data-toggle~="tooltip"]')
        ) {
            item.removeAttribute('data-state')
        }
    }

    document.addEventListener('click', (e) => {
        getToggle.forEach((item) => removeAtt(item, e))
    })
}

export {toggle}
