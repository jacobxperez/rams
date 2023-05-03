const toggle = {
    toggleCache: new Set(),

    reset: function (toggles) {
        toggles.forEach((toggleElement) => {
            if (
                ['pop', 'tooltip'].some(
                    (type) => toggleElement.dataset.toggle === type
                )
            ) {
                toggleElement.removeAttribute('data-state');
            }
        });
    },

    handleClick: function (e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (targetToggle && !this.toggleCache.has(targetToggle)) {
                this.toggleCache.add(targetToggle);
            }

            const dataState = targetToggle.getAttribute('data-state');

            if (dataState === 'active') {
                this.reset(this.toggleCache);
                targetToggle.removeAttribute('data-state');
            } else {
                this.reset(this.toggleCache);
                targetToggle.setAttribute('data-state', 'active');
            }

            e.stopPropagation();
        } else {
            this.reset(this.toggleCache);
        }

        return this;
    },

    init: function () {
        document.addEventListener('click', this.handleClick.bind(this));

        return this;
    },
};

export {toggle};
