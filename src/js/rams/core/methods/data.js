export const data = {
    get(el, dataName) {
        if (!(el instanceof Element)) {
            console.error(
                'data.get: Provided element is not a valid DOM Element.'
            );
            return null;
        }
        return el.getAttribute(`data-${dataName}`);
    },

    set(el, dataName, value = '') {
        if (!(el instanceof Element)) {
            console.error(
                'data.set: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        el.setAttribute(`data-${dataName}`, value);
        return true;
    },

    appendValue(el, dataName, value) {
        if (!(el instanceof Element)) {
            console.error(
                'data.appendValue: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        if (typeof value !== 'string') {
            console.error('data.appendValue: Value must be a string.');
            return false;
        }

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
        if (!(el instanceof Element)) {
            console.error(
                'data.remove: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        el.removeAttribute(`data-${dataName}`);
        return true;
    },

    removeValue(el, dataName, value) {
        if (!(el instanceof Element)) {
            console.error(
                'data.removeValue: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        let currentValue = el.getAttribute(`data-${dataName}`);

        if (!currentValue) {
            console.warn(
                `data.removeValue: Attribute "data-${dataName}" does not exist.`
            );
            return false;
        }

        let values = currentValue.split(' ').filter((v) => v !== value);

        if (values.length > 0) {
            el.setAttribute(`data-${dataName}`, values.join(' '));
        } else {
            el.removeAttribute(`data-${dataName}`); // Remove attribute if empty
        }

        return true;
    },

    has(el, dataName) {
        if (!(el instanceof Element)) {
            console.error(
                'data.has: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        return el.hasAttribute(`data-${dataName}`);
    },

    hasValue(el, dataName, value) {
        if (!(el instanceof Element)) {
            console.error(
                'data.hasValue: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        let currentValue = el.getAttribute(`data-${dataName}`);
        return currentValue ? currentValue.split(' ').includes(value) : false;
    },

    isEmpty(el, dataName) {
        if (!(el instanceof Element)) {
            console.error(
                'data.isEmpty: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        let value = el.getAttribute(`data-${dataName}`);
        return value === null || value.trim() === '';
    },

    isTruthy(el, dataName) {
        if (!(el instanceof Element)) {
            console.error(
                'data.isTruthy: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        let value = el.getAttribute(`data-${dataName}`)?.toLowerCase();
        return ['true', '1', 'yes', 'on'].includes(value);
    },

    closest(el, dataName, value = null) {
        if (!(el instanceof Element)) {
            console.error(
                'data.closest: Provided element is not a valid DOM Element.'
            );
            return null;
        }
        return el.closest(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    matches(el, dataName, value = null) {
        if (!(el instanceof Element)) {
            console.error(
                'data.matches: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        return el.matches(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    toggle(el, dataName, value = '') {
        if (!(el instanceof Element)) {
            console.error(
                'data.toggle: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        const currentValue = el.getAttribute(`data-${dataName}`);
        if (currentValue === value) {
            el.removeAttribute(`data-${dataName}`);
            return false;
        }
        el.setAttribute(`data-${dataName}`, value);
        return true;
    },

    toggleValue(el, dataName, value1 = null, value2 = '') {
        if (!(el instanceof Element)) {
            console.error(
                'data.toggleValue: Provided element is not a valid DOM Element.'
            );
            return false;
        }
        const currentValue = el.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        el.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    },

    findFirstWithData(root, dataName, value = null) {
        if (!(root instanceof Element)) {
            console.error(
                'data.findFirstWithData: Provided root is not a valid DOM Element.'
            );
            return null;
        }
        return root.querySelector(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    findAllWithData(root, dataName, value = null) {
        if (!(root instanceof Element)) {
            console.error(
                'data.findAllWithData: Provided root is not a valid DOM Element.'
            );
            return [];
        }
        return root.querySelectorAll(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    observe(el, dataName, callback) {
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
        if (!(observer instanceof MutationObserver)) {
            console.error(
                'data.disconnectObserver: Provided observer is not a valid MutationObserver.'
            );
            return false;
        }
        observer.disconnect();
        return true;
    },

    debouncedObserver(el, dataName, callback, delay = 300) {
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
