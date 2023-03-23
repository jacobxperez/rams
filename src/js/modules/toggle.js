const toggle = () => {
    const getToggle = document.querySelectorAll('[data-toggle]');

    // toggles attribute
    getToggle.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            toggle.hasAttribute('data-state', 'active')
                ? toggle.removeAttribute('data-state')
                : toggle.setAttribute('data-state', 'active');
            e.stopPropagation();
        });
    });

    document.addEventListener('click', (e) => {
        // remove active state
        getToggle.forEach((toggle) => {
            if (
                (e.target !== toggle && toggle.matches('[data-toggle~="pop"]')) ||
                toggle.matches('[data-toggle~="tooltip"]')
            ) {
                toggle.removeAttribute('data-state');
            }
        });
    });
};

export {toggle};
