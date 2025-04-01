export const data = {
    get(el, dataName) {
        return el instanceof Element
            ? el.getAttribute(`data-${dataName}`)
            : null;
    },

    set(el, dataName, value = '') {
        if (!(el instanceof Element)) return false;
        el.setAttribute(`data-${dataName}`, value);
        return true;
    },

    appendValue(el, dataName, value) {
        if (!(el instanceof Element) || typeof value !== 'string') return false;

        let currentValue = el.getAttribute(`data-${dataName}`);
        let values = new Set(currentValue ? currentValue.split(' ') : []);

        if (!values.has(value)) {
            values.add(value);
            el.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
            return true;
        }

        return false;
    },

    remove(el, dataName) {
        if (!(el instanceof Element)) return false;
        el.removeAttribute(`data-${dataName}`);
        return true;
    },

    removeValue(el, dataName, value) {
        if (!(el instanceof Element)) return false;
        let currentValue = el.getAttribute(`data-${dataName}`);

        if (!currentValue) return false;

        let values = new Set(currentValue.split(' '));
        values.delete(value);

        if (values.size > 0) {
            el.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
        } else {
            el.removeAttribute(`data-${dataName}`);
        }

        return true;
    },

    has(el, dataName) {
        return el instanceof Element && el.hasAttribute(`data-${dataName}`);
    },

    hasValue(el, dataName, value) {
        if (!(el instanceof Element)) return false;
        let currentValue = el.getAttribute(`data-${dataName}`);
        return currentValue ? currentValue.split(' ').includes(value) : false;
    },

    isEmpty(el, dataName) {
        if (!(el instanceof Element)) return false;
        let value = el.getAttribute(`data-${dataName}`);
        return value === null || value.trim() === '';
    },

    isTruthy(el, dataName) {
        if (!(el instanceof Element)) return false;
        let value = el.getAttribute(`data-${dataName}`)?.toLowerCase();
        return ['true', '1', 'yes', 'on'].includes(value);
    },

    closest(el, dataName, value = null) {
        if (!(el instanceof Element)) return null;
        return el.closest(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    matches(el, dataName, value = null) {
        if (!(el instanceof Element)) return false;
        return el.matches(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    toggle(el, dataName, value = '') {
        if (!(el instanceof Element)) return false;
        const currentValue = el.getAttribute(`data-${dataName}`);
        if (currentValue === value || (value === '' && currentValue !== null)) {
            el.removeAttribute(`data-${dataName}`);
            return false;
        }
        el.setAttribute(`data-${dataName}`, value);
        return true;
    },

    toggleValue(el, dataName, value1, value2) {
        if (!(el instanceof Element)) return false;
        const currentValue = el.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        el.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    },

    findFirstWithData(root, dataName, value = null) {
        return root instanceof Element
            ? root.querySelector(
                  value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
              )
            : null;
    },

    findAllWithData(root, dataName, value = null) {
        if (!(root instanceof Element)) {
            console.error(
                'data.findAllWithData: Provided root is not a valid DOM Element.'
            );
            return [];
        }
        return Array.from(
            root.querySelectorAll(
                value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
            )
        );
    },

    observe(el, dataName, callback, config = {attributes: true}) {
        if (!(el instanceof Element)) {
            console.error(
                'data.observe: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        if (typeof callback !== 'function') {
            console.error('data.observe: Callback must be a function.');
            return false;
        }

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(el, el.getAttribute(`data-${dataName}`));
                }
            }
        });

        observer.observe(el, config);
        return observer;
    },

    disconnectObserver(observer) {
        if (!(observer instanceof MutationObserver)) {
            console.error(
                'data.disconnectObserver: Provided observer is not a valid MutationObserver.'
            );
            return false;
        }
        observer.disconnect();
        return true;
    },

    debouncedObserver(
        el,
        dataName,
        callback,
        delay = 300,
        config = {attributes: true}
    ) {
        if (!(el instanceof Element)) {
            console.error(
                'data.debouncedObserver: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        if (typeof callback !== 'function') {
            console.error(
                'data.debouncedObserver: Callback must be a function.'
            );
            return false;
        }
        if (typeof delay !== 'number' || delay < 0) {
            console.error(
                'data.debouncedObserver: Delay must be a non-negative number.'
            );
            return false;
        }

        let timeout;
        const observer = new MutationObserver((mutations) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                for (const mutation of mutations) {
                    if (mutation.attributeName === `data-${dataName}`) {
                        callback(el, el.getAttribute(`data-${dataName}`));
                    }
                }
            }, delay);
        });

        observer.observe(el, config);
        return observer;
    },
};
