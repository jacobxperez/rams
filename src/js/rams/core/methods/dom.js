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

function getData(dataName, value) {
    value
        ? this.selector.getAttribute(`data-${dataName}="${value}"`)
        : this.selector.getAttribute(`data-${dataName}`);
    return this;
}

function hasData(dataName, value) {
    if (value) {
        return this.selector.hasAttribute(`data-${dataName}="${value}"`);
    } else {
        return this.selector.hasAttribute(`[data-${dataName}]`);
    }
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
        : this.selector.closest(`[data-${dataName}]`);
    return this;
}

function matchData(dataName, value) {
    if (value) {
        return this.selector.matches(`data-${dataName}="${value}"`);
    } else {
        return this.selector.matches(`[data-${dataName}]`);
    }
}

export {
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
