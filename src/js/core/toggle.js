import {el} from './rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            clickedSet.forEach((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    el(item).removeData('state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggleState = el(targetToggle).hasData('state', 'active');
        const getDropBox = el(targetToggle).closestData('dropbox');

        reset(getDropBox);

        toggleState
            ? el(targetToggle).removeData('state')
            : el(targetToggle).setData('state', 'active');
    }

    el(document).addEvent('click', (e) => {
        const targetToggle = el(e.target).closestData('toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);

                el(targetToggle).addEvent(
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
