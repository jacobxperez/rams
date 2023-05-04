const toggle = {
    clickedSet: new Set(),
    resetTypes: ['pop', 'tooltip'],

    reset() {
        this.clickedSet.forEach((item) => {
            if (this.resetTypes.some((type) => item.dataset.toggle === type)) {
                item.removeAttribute('data-state');
            }
        });
    },

    handleClick(e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (!this.clickedSet.has(targetToggle)) {
                this.clickedSet.add(targetToggle);
            }

            const toggleState = targetToggle.getAttribute('data-state');

            if (toggleState === 'active') {
                this.reset();
                targetToggle.removeAttribute('data-state');
            } else {
                this.reset();
                targetToggle.setAttribute('data-state', 'active');
            }

            e.preventDefault();
        } else {
            this.reset();
        }
    },

    init() {
        document.addEventListener('click', this.handleClick.bind(this));
    },
};

export {toggle};
