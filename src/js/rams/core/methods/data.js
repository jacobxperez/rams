export const dataAttr = {
    set(el, dataName, value = '') {
        el.setAttribute(`data-${dataName}`, value);
    },

    remove(el, dataName) {
        el.removeAttribute(`data-${dataName}`);
    },

    get(el, dataName) {
        return el.getAttribute(`data-${dataName}`);
    },

    has(el, dataName, value = null) {
        const attrValue = el.getAttribute(`data-${dataName}`);
        return value ? attrValue === value : attrValue !== null;
    },

    closest(el, dataName, value = null) {
        return value
            ? el.closest(`[data-${dataName}="${value}"]`)
            : el.closest(`[data-${dataName}]`);
    },

    matches(el, dataName, value = null) {
        return value
            ? el.matches(`[data-${dataName}="${value}"]`)
            : el.matches(`[data-${dataName}]`);
    },

    toggle(el, dataName, value = '') {
        this.has(el, dataName)
            ? this.remove(el, dataName)
            : this.set(el, dataName, value);
    },

    query(el, dataName, value = null) {
        return el.querySelector(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    queryAll(el, dataName, value = null) {
        return el.querySelectorAll(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },
};
