const toggle = () => {
    const toggleElements = document.querySelectorAll('[data-toggle]');

    const resetToggles = () => {
        toggleElements.forEach((toggleElement) => {
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
