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
        currentValue = currentValue ? currentValue.split(' ') : [];

        if (!currentValue.includes(value)) {
            currentValue.push(value);
            el.setAttribute(`data-${dataName}`, currentValue.join(' '));
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

        if (!currentValue) return false; // Attribute doesn't exist

        let values = currentValue.split(' ').filter((v) => v !== value);

        if (values.length > 0) {
            el.setAttribute(`data-${dataName}`, values.join(' '));
        } else {
            el.removeAttribute(`data-${dataName}`); // Remove attribute if empty
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
        const exists = el.hasAttribute(`data-${dataName}`);
        exists
            ? el.removeAttribute(`data-${dataName}`)
            : el.setAttribute(`data-${dataName}`, value);
        return !exists;
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
        return root instanceof Element
            ? root.querySelectorAll(
                  value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
              )
            : [];
    },

    observe(el, dataName, callback) {
        if (!(el instanceof Element) || typeof callback !== 'function')
            return false;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(el, el.getAttribute(`data-${dataName}`));
                }
            });
        });

        observer.observe(el, {attributes: true});
        return observer;
    },

    disconnectObserver(observer) {
        if (observer instanceof MutationObserver) {
            observer.disconnect();
            return true;
        }
        return false;
    },

    debouncedObserver(el, dataName, callback, delay = 300) {
        if (!(el instanceof Element) || typeof callback !== 'function')
            return false;

        let timeout;
        const observer = new MutationObserver((mutations) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === `data-${dataName}`) {
                        callback(el, el.getAttribute(`data-${dataName}`));
                    }
                });
            }, delay);
        });

        observer.observe(el, {attributes: true});
        return observer;
    },
};
