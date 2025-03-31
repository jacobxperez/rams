import {rams} from '../..';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset() {
        clickedSet.forEach((item) => {
            if (
                resetSet.has(item.dataset.toggle) &&
                rams.data.hasValue(item, 'state', 'active')
            ) {
                rams.data.toggleValue(item, 'state', 'active', 'inactive');
            }
        });
    }

    function toggleState(targetToggle) {
        const dropBox = rams.data.closest(targetToggle, 'dropbox');
        const checkState = rams.data.hasValue(targetToggle, 'state', 'active');

        if (!dropBox && !checkState) {
            reset();
        }

        rams.data.toggleValue(targetToggle, 'state', 'active', 'inactive');
    }

    document.addEventListener('click', (e) => {
        const targetToggle = rams.data.closest(e.target, 'toggle');

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
