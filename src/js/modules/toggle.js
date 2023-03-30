const toggle = () => {
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('[data-toggle]');

        if (toggle) {
            toggle.hasAttribute('data-state', 'active')
                ? toggle.removeAttribute('data-state')
                : toggle.setAttribute('data-state', 'active');

            e.stopPropagation();
        } else {
            const getToggle = document.querySelectorAll('[data-toggle]');

            getToggle.forEach((toggle) => {
                if (
                    (e.target !== toggle &&
                        toggle.matches('[data-toggle~="pop"]')) ||
                    toggle.matches('[data-toggle~="tooltip"]')
                ) {
                    toggle.removeAttribute('data-state');
                }
            });
        }
    });
};

export {toggle};
