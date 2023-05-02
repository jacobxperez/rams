const toggle = () => {
    const toggleCache = [];

    const resetToggles = () => {
        toggleCache.forEach((toggleElement) => {
            toggleElement.removeAttribute('data-state');
        });
    };

    document.addEventListener('click', (e) => {
        const targetToggle = e.target.closest('[data-toggle]');
        const targetPop = e.target.closest('[data-toggle~="pop"]');
        const targetToolTip = e.target.closest('[data-toggle~="tooltip"]');

        if (targetToggle) {
            if (targetPop && !toggleCache.includes(targetPop)) {
                toggleCache.push(targetPop);
            }

            if (targetToolTip && !toggleCache.includes(targetToolTip)) {
                toggleCache.push(targetToolTip);
            }

            const dataState = targetToggle.getAttribute('data-state');

            if (dataState === 'active') {
                resetToggles();
                targetToggle.removeAttribute('data-state');
            } else {
                resetToggles();
                targetToggle.setAttribute('data-state', 'active');
            }

            e.stopPropagation();
        } else {
            resetToggles();
        }
    });
};

export {toggle};
