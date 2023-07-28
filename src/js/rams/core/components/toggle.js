export function toggle(...args) {
    const clickedSet = new Set();
    const resetSet = new Set(['pop', 'tooltip', ...args]);

    function reset() {
        clickedSet.forEach((item) => {
            if (resetSet.has(item.dataset.toggle)) {
                item.removeDataAttr('state');
            }
        });
    }

    function toggleState(targetToggle) {
        const dropBox = targetToggle.closestDataAttr('dropbox');
        if (!dropBox && !targetToggle.hasDataAttr('state')) {
            reset();
        }
        targetToggle.toggleDataAttr('state', 'active');
    }

    document.addEvent('click', (e) => {
        const targetToggle = e.target.closestDataAttr('toggle');

        if (targetToggle) {
            if (clickedSet.has(targetToggle)) {
                return;
            } else {
                clickedSet.add(targetToggle);
                targetToggle.addEvent(
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
