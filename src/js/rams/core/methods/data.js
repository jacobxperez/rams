export const dataAttr = {
    set(el, dataName, value = '') {
        if (!(el instanceof Element)) return;
        el.setAttribute(`data-${dataName}`, value);
    },

    remove(el, dataName) {
        if (!(el instanceof Element)) return;
        el.removeAttribute(`data-${dataName}`);
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
        return value
            ? el.closest(`[data-${dataName}="${value}"]`)
            : el.closest(`[data-${dataName}]`);
    },

    matches(el, dataName, value = null) {
        if (!(el instanceof Element)) return false;
        return value
            ? el.matches(`[data-${dataName}="${value}"]`)
            : el.matches(`[data-${dataName}]`);
    },

    toggle(el, dataName, value = '') {
        if (!(el instanceof Element)) return;
        el.hasAttribute(`data-${dataName}`)
            ? el.removeAttribute(`data-${dataName}`)
            : el.setAttribute(`data-${dataName}`, value);
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
