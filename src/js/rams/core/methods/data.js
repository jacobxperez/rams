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

export {getData, hasData, setData, removeData, closestData, matchData};
