import {rams} from './rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            rams.e(clickedSet).each((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    rams.e(item).removeData('state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggleState = rams.e(targetToggle).hasData('state', 'active');
        const getDropBox = rams.e(targetToggle).closestData('dropbox');

        reset(getDropBox);

        toggleState
            ? rams.e(targetToggle).removeData('state')
            : rams.e(targetToggle).setData('state', 'active');
    }

    rams.e(document).addEvent('click', (e) => {
        const targetToggle = rams.e(e.target).closestData('toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);

                rams.e(targetToggle).addEvent(
                    'click',
                    (e) => {
                        toggleState(targetToggle);
                        e.stopPropagation();
                    },
                    true
                );
            }

            toggleState(targetToggle);
        } else {
            reset();
        }

        e.stopPropagation();
    });

    return this;
}
