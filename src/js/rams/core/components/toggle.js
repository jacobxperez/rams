import {rams} from '../../rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(dropBox) {
        if (!dropBox) {
            clickedSet.forEach((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    item.removeAttribute('data-state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggle = rams.select(targetToggle);
        const state = toggle.hasData('state');
        const dropBox = toggle.closestData('dropbox');

        reset(dropBox);

        state ? toggle.removeData('state') : toggle.setData('state', 'active');
    }

    rams.click((e) => {
        const target = rams.select(e.target);
        const targetToggle = target.closestData('toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);
                rams.select(targetToggle).click((e) => {
                    toggleState(targetToggle);
                    e.stopPropagation();
                }, true);
            }

            toggleState(targetToggle);
        } else {
            reset();
        }

        e.stopPropagation();
    });

    return this;
}
