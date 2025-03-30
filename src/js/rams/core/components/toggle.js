import { rams } from "../..";

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset() {
        clickedSet.forEach((item) => {
            if (resetSet.has(item.dataset.toggle)) {
                rams.dataAttr.removeValue(item, 'state', 'active')
                rams.dataAttr.set(item, 'state', 'off');
            }
        });
    }

    function toggleState(targetToggle) {
        const dropBox = rams.dataAttr.closest(targetToggle, 'dropbox');
        const checkState = rams.dataAttr.hasValue(targetToggle, 'state', 'active');

        if (!dropBox && !checkState) {
            reset();
        }

        rams.dataAttr.toggleValue(targetToggle, 'state', 'active', 'off');
    }

    document.addEventListener('click', (e) => {
        const targetToggle = rams.dataAttr.closest(e.target, 'toggle');

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
