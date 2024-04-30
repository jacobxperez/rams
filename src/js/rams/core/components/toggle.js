import {rams} from '../../index.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset() {
        clickedSet.forEach((item) => {
            if (resetSet.has(item.dataset.toggle)) {
                rams.removeDataAttr(item, 'state');
            }
        });
    }

    function toggleState(targetToggle) {
        const dropBox = rams.closestDataAttr(targetToggle, 'dropbox');
        const checkState = rams.hasDataAttr(targetToggle, 'state');

        if (!dropBox && !checkState) {
            reset();
        }

        rams.toggleDataAttr(targetToggle, 'state', 'active');
    }

    document.addEventListener('click', (e) => {
        const targetToggle = rams.closestDataAttr(e.target, 'toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);
                targetToggle.addEventListener(
                    'click',
                    (e) => {
                        toggleState(targetToggle);
                        e.stopPropagation();
                    },
                    true
                );
                toggleState(targetToggle);
            }
        } else {
            reset();
        }

        e.stopPropagation();
    });

    return this;
}
