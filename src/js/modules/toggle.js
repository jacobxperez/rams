const toggle = {
    toggleSet: new Set(),

    reset() {
        this.toggleSet.forEach((item) => {
            if (
                ['pop', 'tooltip'].some((type) => item.dataset.toggle === type)
            ) {
                item.removeAttribute('data-state');
            }
        });
    },

    handleClick(e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (!this.toggleSet.has(targetToggle)) {
                this.toggleSet.add(targetToggle);
            }

            const toggleState = targetToggle.getAttribute('data-state');

            if (toggleState === 'active') {
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
