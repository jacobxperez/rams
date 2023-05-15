export const toggle = {
    clickedSet: new Set(),
    resetSet: new Set(['pop', 'tooltip']),

    reset(getDropBox) {
        if (!getDropBox) {
            this.clickedSet.forEach((item) => {
                if (this.resetSet.has(item.dataset.toggle)) {
                    item.removeAttribute('data-state');
                }
            });
        }
    },

    toggleState(targetToggle) {
        const toggleState = targetToggle.getAttribute('data-state');
        const getDropBox = targetToggle.closest('[data-dropbox]');

        if (toggleState === 'active') {
            this.reset(getDropBox);
            targetToggle.removeAttribute('data-state');
        } else {
            this.reset(getDropBox);
            targetToggle.setAttribute('data-state', 'active');
        }
    },

    addToggleEvent(targetToggle) {
        targetToggle.addEventListener('click', (e) => {
            this.toggleState(targetToggle);
            e.stopPropagation();
        });
    },

    setUp(e) {
        const targetToggle = e.target.closest('[data-toggle]');

        if (targetToggle) {
            if (this.clickedSet.has(targetToggle)) {
                return;
            } else {
                this.clickedSet.add(targetToggle);
                this.addToggleEvent(targetToggle);
            }

            this.toggleState(targetToggle);

            e.stopPropagation();
        } else {
            this.reset();
        }
    },

    init() {
        document.addEventListener('click', this.setUp.bind(this));
    },
};
