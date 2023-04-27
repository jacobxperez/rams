const toggle = () => {
    const removeAttribute = () => {
        const toggleElements = document.querySelectorAll('[data-toggle]');

        toggleElements.forEach((toggleElement) => {
            const isPopToggle = toggleElement.matches('[data-toggle~="pop"]');
            const isTooltipToggle = toggleElement.matches(
                '[data-toggle~="tooltip"]'
            );

            if (isPopToggle || isTooltipToggle) {
                toggleElement.removeAttribute('data-state');
            }
        });
    };

    document.addEventListener('click', (e) => {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            const dataState = targetToggle.getAttribute('data-state');
            if (dataState === 'active') {
                targetToggle.removeAttribute('data-state');
            } else {
                removeAttribute();
                targetToggle.setAttribute('data-state', 'active');
            }

            e.stopPropagation();
        } else {
            removeAttribute();
        }
    });
};

export {toggle};
