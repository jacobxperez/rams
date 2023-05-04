const toggle = {
    resetSet: new Set(),

    reset() {
        this.resetSet.forEach((item) => {
            item.removeAttribute('data-state');
        });
    },

    handleClick(e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (!this.resetSet.has(targetToggle)) {
                if (
                    targetToggle.getAttribute('data-toggle') === 'pop' ||
                    targetToggle.getAttribute('data-toggle') === 'tooltip'
                ) {
                    // adds toggle pop and tooltip to reset set
                    this.resetSet.add(targetToggle);
                }
            }

            const dataState = targetToggle.getAttribute('data-state');

            if (dataState === 'active') {
                this.reset();
                targetToggle.removeAttribute('data-state');
            } else {
                this.reset();
                targetToggle.setAttribute('data-state', 'active');
            }

            e.stopPropagation();
        } else {
            this.reset();
        }
    },

    init() {
        document.addEventListener('click', this.handleClick.bind(this));
    },
};

export {toggle};
