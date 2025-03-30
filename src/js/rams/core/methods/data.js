export const dataAttr = {
    set(el, dataName, value = '') {
        if (!(el instanceof Element)) return false;
        el.setAttribute(`data-${dataName}`, value);
        return true;
    },

    remove(el, dataName) {
        if (!(el instanceof Element)) return false;
        el.removeAttribute(`data-${dataName}`);
        return true;
    },

    removeValue(el, dataName, value = null) {
        if (!(el instanceof Element)) return false;
        const currentValue = el.getAttribute(`data-${dataName}`);

        if (currentValue === null) return false;

        if (value === null || currentValue === value) {
            el.setAttribute(`data-${dataName}`, '');
            return true;
        }

        return false;
    },

    get(el, dataName) {
        return el instanceof Element
            ? el.getAttribute(`data-${dataName}`)
            : null;
    },

    has(el, dataName) {
        return el instanceof Element && el.hasAttribute(`data-${dataName}`);
    },

    hasValue(el, dataName, value) {
        if (!(el instanceof Element)) return false;
        return el.getAttribute(`data-${dataName}`) === value;
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

    query(el, dataName, value = null) {
        return el instanceof Element
            ? el.querySelector(
                  value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
              )
            : null;
    },

    queryAll(el, dataName, value = null) {
        return el instanceof Element
            ? el.querySelectorAll(
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
};
