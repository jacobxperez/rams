import {
    hasDataAttr,
    closestDataAttr,
    toggleDataAttrValue,
} from '../dom/data.js';

/**
 * Toggles the state of elements based on user interaction.
 *
 * This function manages the active/inactive state of elements with a `data-toggle` attribute.
 * It ensures that only one element remains active at a time unless specified otherwise.
 *
 * @param {...string} args - Additional toggle types to include in the reset set.
 * @returns {Object} The current context for chaining.
 */
export const toggle = (...args) => {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    /**
     * Resets the state of all toggled elements in the clickedSet.
     */
    function reset() {
        clickedSet.forEach((item) => {
            if (
                resetSet.has(item.dataset.toggle) &&
                hasDataAttr(item, 'state', 'active')
            ) {
                toggleDataAttrValue(item, 'state', 'active', 'inactive');
            }
        });
    }

    /**
     * Toggles the state of the target element and resets others if necessary.
     *
     * @param {Element} targetToggle - The element to toggle.
     */
    function toggleState(targetToggle) {
        const dropBox = closestDataAttr(targetToggle)('dropbox');
        const checkState = hasDataAttr(targetToggle, 'state', 'active');

        if (!dropBox && !checkState) {
            reset();
        }

        toggleDataAttrValue(targetToggle, 'state', 'active', 'inactive');
    }

    /**
     * Handles click events to manage toggle behavior.
     */
    document.addEventListener('click', (e) => {
        const targetToggle = closestDataAttr(e.target)('toggle');
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
};
