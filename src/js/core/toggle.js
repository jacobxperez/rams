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

        this.reset(getDropBox);

        if (toggleState === 'active') {
            rams.removeData(targetToggle, 'state');
        } else {
            rams.setData(targetToggle, 'state', 'active');
        }
    },

    setUp(e) {
        const targetToggle = rams.closestData(e.target, 'toggle');

        if (targetToggle) {
            if (this.clickedSet.has(targetToggle)) {
                return;
            } else {
                this.clickedSet.add(targetToggle);
                rams.addEvent(targetToggle, 'click', (e) => {
                    this.toggleState(targetToggle);
                    e.stopPropagation();
                });
            }

            this.toggleState(targetToggle);

            e.stopPropagation();
        } else {
            this.reset();
        }
    },

    init() {
        rams.addEvent(document, 'click', this.setUp.bind(this));
    },
};
