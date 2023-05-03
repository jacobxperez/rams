const toggle = {
    toggleCache: new Set(),

    reset: function (toggles) {
        toggles.forEach((toggleElement) => {
            toggleElement.removeAttribute('data-state');
        });
    },

    handleClick: function (e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (!this.toggleCache.has(targetToggle)) {
                if (
                    ['pop', 'tooltip'].includes(
                        targetToggle.getAttribute('data-toggle')
                    )
                ) {
                    this.toggleCache.add(targetToggle);
                }
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
