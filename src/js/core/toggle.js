import {print} from './print';

export const toggle = {
    clickedSet: new Set(),
    resetSet: new Set(['pop', 'tooltip']),

    reset() {
        this.clickedSet.forEach((item) => {
            if (this.resetSet.has(item.dataset.toggle)) {
                item.removeAttribute('data-state');
            }
        });
    },

    handleClick(e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            const toggleState = targetToggle.getAttribute('data-state');

            if (!this.clickedSet.has(targetToggle)) {
                this.clickedSet.add(targetToggle);
            }

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
