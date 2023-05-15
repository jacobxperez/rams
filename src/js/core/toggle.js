import {getData, setData, removeData, closestData} from './element';

export const toggle = {
    clickedSet: new Set(),
    resetSet: new Set(['pop', 'tooltip']),

    reset(getDropBox) {
        if (!getDropBox) {
            this.clickedSet.forEach((item) => {
                if (this.resetSet.has(item.dataset.toggle)) {
                    removeData(item, 'state');
                }
            });
        }
    },

    toggleState(targetToggle) {
        const toggleState = getData(targetToggle, 'state');
        const getDropBox = closestData(targetToggle, 'dropbox');

        if (toggleState === 'active') {
            this.reset(getDropBox);
            removeData(targetToggle, 'state');
        } else {
            this.reset(getDropBox);
            setData(targetToggle, 'state', 'active');
        }
    },

    addEvent(targetToggle) {
        targetToggle.addEventListener('click', (e) => {
            this.toggleState(targetToggle);
            e.stopPropagation();
        });
    },

    setUp(e) {
        const targetToggle = closestData(e.target, 'toggle');

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
