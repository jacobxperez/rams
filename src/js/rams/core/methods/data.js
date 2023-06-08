function setDataAttr() {
    Element.prototype.setDataAttr = function (dataName, value) {
        this.setAttribute(`data-${dataName}`, value);

        return this;
    };

    return this;
}

function removeDataAttr() {
    Element.prototype.removeDataAttr = function (dataName) {
        this.removeAttribute(`data-${dataName}`);

        return this;
    };

    return this;
}

function getDataAttr() {
    Element.prototype.getDataAttr = function (dataName, value) {
        if (value) {
            return this.getAttribute(`data-${dataName}="${value}"`);
        } else {
            return this.getAttribute(`data-${dataName}`);
        }
    };

    return this;
}

function hasDataAttr() {
    Element.prototype.hasDataAttr = function (dataName, value) {
        if (value) {
            return this.hasAttribute(`data-${dataName}="${value}"`);
        } else {
            return this.hasAttribute(`data-${dataName}`);
        }
    };

    return this;
}

function closestDataAttr() {
    Element.prototype.closestDataAttr = function (dataName, value) {
        if (value) {
            return this.closest(`[data-${dataName}="${value}"]`);
        } else {
            return this.closest(`[data-${dataName}]`);
        }
    };

    return this;
}

function matchDataAttr() {
    Element.prototype.matchDataAttr = function (dataName, value) {
        if (value) {
            return this.matches(`[data-${dataName}="${value}"]`);
        } else {
            return this.matches(`[data-${dataName}]`);
        }
    };

    return this;
}

export {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchDataAttr,
};
