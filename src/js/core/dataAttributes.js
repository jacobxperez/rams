import {rams} from './rams.js';

function getData(attributeName) {
    return this.element.getAttribute(`data-${attributeName}`);
}

function hasData(attributeName, value) {
    return rams(this.element).getData(attributeName) === value;
}

function setData(attributeName, value) {
    return this.element.setAttribute(`data-${attributeName}`, value);
}

function removeData(attributeName) {
    return this.element.removeAttribute(`data-${attributeName}`);
}

function closestData(attributeName) {
    return this.element.closest(`[data-${attributeName}]`);
}


export {getData, hasData, setData, removeData, closestData};
