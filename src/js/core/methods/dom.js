function select(selector) {
    if (selector === window || selector === document) return selector;
    return document.querySelector(selector);
}

function selectAll(selector) {
    if (selector === window || selector === document)
        return console.error(`${selector} is not supported`);
    return document.querySelectorAll(selector);
}

function create(element) {
    return this.selector.createElement(element);
}

function getData(dataName) {
    return this.selector.getAttribute(`data-${dataName}`);
}

function hasData(dataName, value) {
    return this.selector.getAttribute(`data-${dataName}`) === value;
}

function setData(dataName, value) {
    return this.selector.setAttribute(`data-${dataName}`, value);
}

function removeData(dataName) {
    return this.selector.removeAttribute(`data-${dataName}`);
}

function closestData(dataName, value) {
    return value
        ? this.selector.closest(`[data-${dataName}="${value}"]`)
        : this.selector.closest(`[data-${dataName}`);
}

function matchData(dataName, value) {
    return value
        ? this.selector.matches(`[data-${dataName}="${value}"]`)
        : this.selector.matches(`[data-${dataName}`);
}

function create(element) {
    return document.createElement(element);
}

function clone(options = this.options) {
    return this.selector.cloneNode(options);
}

function append(...args) {
    return this.selector.append(args);
}

export {
    select,
    selectAll,
    create,
    clone,
    append,
    getData,
    hasData,
    setData,
    removeData,
    closestData,
    matchData,
};
