import {rams} from './rams.js';

export const toggle = {
    clickedSet: new Set(),
    resetSet: new Set(['pop', 'tooltip']),

    reset(getDropBox) {
        if (!getDropBox) {
            this.clickedSet.forEach((item) => {
                if (this.resetSet.has(item.dataset.toggle)) {
                    rams.removeData(item, 'state');
                }
            });
        }
    },

    toggleState(targetToggle) {
        const toggleState = rams.getData(targetToggle, 'state');
        const getDropBox = rams.closestData(targetToggle, 'dropbox');

        if (toggleState === 'active') {
            this.reset(getDropBox);
            rams.removeData(targetToggle, 'state');
        } else {
            this.reset(getDropBox);
            rams.setData(targetToggle, 'state', 'active');
        }
    },

    addEvent(targetToggle) {
        targetToggle.addEventListener('click', (e) => {
            this.toggleState(targetToggle);
            e.stopPropagation();
        });
    },

    setUp(e) {
        const targetToggle = rams.closestData(e.target, 'toggle');

        if (targetToggle) {
            if (this.clickedSet.has(targetToggle)) {
                return;
            } else {
                this.clickedSet.add(targetToggle);
                this.addEvent(targetToggle);
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
