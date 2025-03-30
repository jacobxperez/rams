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

    get(el, dataName) {
        return el instanceof Element
            ? el.getAttribute(`data-${dataName}`)
            : null;
    },

    has(el, dataName, value = null) {
        if (!(el instanceof Element)) return false;
        const attrValue = el.getAttribute(`data-${dataName}`);
        return value ? attrValue === value : attrValue !== null;
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
};
