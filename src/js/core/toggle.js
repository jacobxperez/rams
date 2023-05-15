import {rams} from './rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            clickedSet.forEach((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    rams.removeData(item, 'state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggleState = rams.getData(targetToggle, 'state');
        const getDropBox = rams.closestData(targetToggle, 'dropbox');

        reset(getDropBox);

        if (toggleState === 'active') {
            rams.removeData(targetToggle, 'state');
        } else {
            rams.setData(targetToggle, 'state', 'active');
        }
    }

    rams.addEvent(document, 'click', (e) => {
        const targetToggle = rams.closestData(e.target, 'toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);

                rams.addEvent(targetToggle, 'click', (e) => {
                    toggleState(targetToggle);
                    e.stopPropagation();
                });
            }

            toggleState(targetToggle);

            e.stopPropagation();
        } else {
            reset();
        }

        e.stopPropagation();
    });
}
