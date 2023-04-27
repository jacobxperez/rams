const toggle = () => {
    document.addEventListener('click', (e) => {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            const dataState = targetToggle.getAttribute('data-state');
            if (dataState === 'active') {
                targetToggle.removeAttribute('data-state');
            } else {
                targetToggle.setAttribute('data-state', 'active');
            }

            e.stopPropagation();
        } else {
            const toggleElements = document.querySelectorAll('[data-toggle]');

            toggleElements.forEach((toggleElement) => {
                const isPopToggle = toggleElement.matches(
                    '[data-toggle~="pop"]'
                );
                const isTooltipToggle = toggleElement.matches(
                    '[data-toggle~="tooltip"]'
                );

                if (
                    e.target !== toggleElement &&
                    (isPopToggle || isTooltipToggle)
                ) {
                    toggleElement.removeAttribute('data-state');
                }
            });
        }
    });
};

export {toggle};
