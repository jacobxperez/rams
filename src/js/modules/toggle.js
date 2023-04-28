const resetToggles = (toggleElements) => {
    toggleElements.forEach((toggleElement) => {
        const isPopToggle = toggleElement.matches('[data-toggle="pop"]');
        const isTooltipToggle = toggleElement.matches(
            '[data-toggle="tooltip"]'
        );
        if (isPopToggle || isTooltipToggle) {
            toggleElement.removeAttribute('data-state');
        }
    });
};

const toggle = () => {
    const toggleElements = document.querySelectorAll('[data-toggle]');

    const handleToggleClick = (e) => {
        const targetToggle = e.target.closest('[data-toggle]');
        if (targetToggle) {
            const dataState = targetToggle.getAttribute('data-state');
            if (dataState === 'active') {
                resetToggles(toggleElements);
                targetToggle.removeAttribute('data-state');
            } else {
                resetToggles(toggleElements);
                targetToggle.setAttribute('data-state', 'active');
            }
            e.stopPropagation();
        } else {
            resetToggles(toggleElements);
        }
    };

    document.addEventListener('click', handleToggleClick);
};

export {resetToggles, toggle};
