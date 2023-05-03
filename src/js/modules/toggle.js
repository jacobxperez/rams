const toggle = () => {
    const toggleCache = new Set();

    const resetToggles = () => {
        toggleCache.forEach((toggleElement) => {
            if (
                ['pop', 'tooltip'].some(
                    (type) => toggleElement.dataset.toggle === type
                )
            ) {
                toggleElement.removeAttribute('data-state');
            }
        });
    };

    document.addEventListener('click', (e) => {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (targetToggle && !toggleCache.has(targetToggle)) {
                toggleCache.add(targetToggle);
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
