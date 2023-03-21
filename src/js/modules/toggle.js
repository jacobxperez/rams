const toggle = () => {
    const getToggle = document.querySelectorAll('[data-toggle]');

    // toggles attribute
    getToggle.forEach((i) => {
        i.addEventListener('click', (e) => {
            i.hasAttribute('data-state', 'active')
                ? i.removeAttribute('data-state')
                : i.setAttribute('data-state', 'active');
            e.stopPropagation();
        });
    });

    document.addEventListener('click', (e) => {
        // remove active state
        getToggle.forEach((i) => {
            if (
                (e.target !== i && i.matches('[data-toggle~="pop"]')) ||
                i.matches('[data-toggle~="tooltip"]')
            ) {
                i.removeAttribute('data-state');
            }
        });
    });
};

export {toggle};
