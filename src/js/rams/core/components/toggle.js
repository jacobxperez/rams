import {rams} from '../../rams.js';

export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset(getDropBox) {
        if (!getDropBox) {
            clickedSet.forEach((item) => {
                if (resetSet.has(item.dataset.toggle)) {
                    item.removeAttribute('data-state');
                }
            });
        }
    }

    function toggleState(targetToggle) {
        const state = targetToggle.hasAttribute('data-state');
        const getDropBox = targetToggle.closest('[data-dropbox]');

        reset(getDropBox);

        state
            ? targetToggle.removeAttribute('data-state')
            : targetToggle.setAttribute('data-state', 'active');
    }

    document.addEventListener('click', (e) => {
        const targetToggle = e.target.closest('[data-toggle]');

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
            }

            toggleState(targetToggle);
        } else {
            reset();
        }

        e.stopPropagation();
    });

    return this;
}
