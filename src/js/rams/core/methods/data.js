function setData(dataName, value) {
    this.selector.setAttribute(`data-${dataName}`, value);

    return this;
}

function removeData(dataName) {
    this.selector.removeAttribute(`data-${dataName}`);

    return this;
}

function getData(dataName, value) {
    if (value) {
        return this.selector.getAttribute(`data-${dataName}="${value}"`);
    } else {
        return this.selector.getAttribute(`data-${dataName}`);
    }
}

function hasData(dataName, value) {
    if (value) {
        return this.selector.hasAttribute(`[data-${dataName}="${value}"]`);
    } else {
        return this.selector.hasAttribute(`[data-${dataName}]`);
    }
}

function closestData(dataName, value) {
    if (value) {
        return this.selector.closest(`[data-${dataName}="${value}"]`);
    } else {
        return this.selector.closest(`[data-${dataName}]`);
    }
}

function matchData(dataName, value) {
    if (value) {
        return this.selector.matches(`[data-${dataName}="${value}"]`);
    } else {
        return this.selector.matches(`[data-${dataName}]`);
    }
}

export {setData, removeData, getData, hasData, closestData, matchData};
