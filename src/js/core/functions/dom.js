function select(selector) {
    return document.querySelector(selector);
}

function selectAll(selector) {
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

export {
    select,
    selectAll,
    create,
    getData,
    hasData,
    setData,
    removeData,
    closestData,
    matchData,
};
