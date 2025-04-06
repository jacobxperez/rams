import {r} from '../../RAMS.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    /**
     * Resets the state of all toggled elements in the clickedSet.
     */
    function reset() {
        clickedSet.forEach((item) => {
            if (
                resetSet.has(item.dataset.toggle) &&
                r.hasDataAttr(item, 'state', 'active')
            ) {
                r.toggleDataAttrValue(item, 'state', 'active', 'inactive');
            }
        });
    }

    /**
     * Toggles the state of the target element and resets others if necessary.
     * @param {Element} targetToggle - The element to toggle.
     */
    function toggleState(targetToggle) {
        const dropBox = r.closestDataAttr(targetToggle, 'dropbox');
        const checkState = r.hasDataAttr(targetToggle, 'state', 'active');

        if (!dropBox && !checkState) {
            reset();
        }

        r.toggleDataAttrValue(targetToggle, 'state', 'active', 'inactive');
    }

    document.addEventListener('click', (e) => {
        const targetToggle = r.closestDataAttr(e.target, 'toggle');
        if (!targetToggle) {
            reset();
            return;
        }

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
