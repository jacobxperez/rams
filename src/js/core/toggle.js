import {rams} from './rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            clickedSet.forEach((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    rams(item).removeData('state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggleState = rams(targetToggle).hasData('state', 'active');
        const getDropBox = rams(targetToggle).closestData('dropbox');

        reset(getDropBox);

        toggleState
            ? rams(targetToggle).removeData('state')
            : rams(targetToggle).setData('state', 'active');
    }

    rams(document).addEvent('click', (e) => {
        const targetToggle = rams(e.target).closestData('toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);

                rams(targetToggle).addEvent(
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
