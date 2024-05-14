import {rams} from '../../index.js';

function setDataAttr(element, dataName, value = '') {
    return element.setAttribute(`data-${dataName}`, value);
}

function removeDataAttr(element, dataName) {
    return element.removeAttribute(`data-${dataName}`);
}

function getDataAttr(element, dataName, value) {
    if (value) {
        return element.getAttribute(`data-${dataName}="${value}"`);
    } else {
        return element.getAttribute(`data-${dataName}`);
    }
}

function hasDataAttr(element, dataName, value) {
    if (value) {
        return element.hasAttribute(`data-${dataName}="${value}"`);
    } else {
        return element.hasAttribute(`data-${dataName}`);
    }
}

function closestDataAttr(element, dataName, value) {
    if (value) {
        return element.closest(`[data-${dataName}="${value}"]`);
    } else {
        return element.closest(`[data-${dataName}]`);
    }
}

function matchesDataAttr(element, dataName, value) {
    if (value) {
        return element.matches(`[data-${dataName}="${value}"]`);
    } else {
        return element.matches(`[data-${dataName}]`);
    }
}

function toggleDataAttr(element, dataName, value) {
    return rams.hasDataAttr(element, dataName)
        ? rams.removeDataAttr(element, dataName)
        : rams.setDataAttr(element, dataName, value);
}

export {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
};
