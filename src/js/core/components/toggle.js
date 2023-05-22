import {rams} from '../rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            rams.select(clickedSet).eachOf((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    rams.select(item).removeData('state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const toggleState = rams
            .select(targetToggle)
            .hasData('state', 'active');
        const getDropBox = rams.select(targetToggle).closestData('dropbox');

        reset(getDropBox);

        toggleState
            ? rams.select(targetToggle).removeData('state')
            : rams.select(targetToggle).setData('state', 'active');
    }

    rams.select(document).click((e) => {
        const targetToggle = rams.select(e.target).closestData('toggle');

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
