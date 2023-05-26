function select(selector = this.selector) {
    if (selector === window || selector === document || selector instanceof Array || selector instanceof Element) {
        this.selector = selector;
        return this;
    }
    this.selector = document.querySelector(selector);
    return this;
}

function selectAll(selector = this.selector) {
    if (selector === window || selector === document || selector instanceof Array) {
        console.error(`${selector} is not supported`);
        return this;
    }
    this.selector = document.querySelectorAll(selector);
    return this;
}

function create(element) {
    this.selector = document.createElement(element);
    return this;
}

function clone(boolean = false) {
    this.selector = this.selector.cloneNode(boolean);
    return this;
}

function append(...args) {
    this.selector.append(args);
    return this;
}

function getData(dataName) {
    this.selector.getAttribute(`data-${dataName}`);
    return this;
}

function hasData(dataName, value) {
    this.selector.getAttribute(`data-${dataName}`) === value;
    return this;
}

function setData(dataName, value) {
    this.selector.setAttribute(`data-${dataName}`, value);
    return this;
}

function removeData(dataName) {
    this.selector.removeAttribute(`data-${dataName}`);
    return this;
}

function closestData(dataName, value) {
    value
        ? this.selector.closest(`[data-${dataName}="${value}"]`)
        : this.selector.closest(`[data-${dataName}`);
    return this;
}

function matchData(dataName, value) {
    value
        ? this.selector.matches(`[data-${dataName}="${value}"]`)
        : this.selector.matches(`[data-${dataName}`);
    return this;
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
