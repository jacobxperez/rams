const toggle = () => {
    const toggleCache = [];

    const resetToggles = () => {
        // loops only to the toggles that have been clicked
        // and removes active state from pop and tooltips
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
            // on click adds the toggle to the toggle cache
            if (targetToggle && !toggleCache.includes(targetToggle)) {
                toggleCache.push(targetToggle);
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
