function getData(dataName, value) {
    value
        ? this.selected.getAttribute(`data-${dataName}="${value}"`)
        : this.selected.getAttribute(`data-${dataName}`);

    return this;
}

function setData(dataName, value) {
    this.selected.setAttribute(`data-${dataName}`, value);

    return this;
}

function hasData(dataName, value) {
    if (value) {
        return this.selected.hasAttribute(`[data-${dataName}="${value}"]`);
    } else {
        return this.selected.hasAttribute(`[data-${dataName}]`);
    }
}


function removeData(dataName) {
    this.selected.removeAttribute(`data-${dataName}`);

    return this;
}

function closestData(dataName, value) {
    if (value) {
        return this.selected.closest(`[data-${dataName}="${value}"]`)
    } else {
        return this.selected.closest(`[data-${dataName}]`);
    }
}

function matchData(dataName, value) {
    if (value) {
        return this.selected.matches(`[data-${dataName}="${value}"]`);
    } else {
        return this.selected.matches(`[data-${dataName}]`);
    }
}

export {getData, setData, hasData, removeData, closestData, matchData};
