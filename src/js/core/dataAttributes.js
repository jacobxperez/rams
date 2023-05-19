import {el} from './rams.js';

function getData(dataName) {
    return this.element.getAttribute(`data-${dataName}`);
}

function hasData(dataName, value) {
    return el(this.element).getData(dataName) === value;
}

function setData(dataName, value) {
    return this.element.setAttribute(`data-${dataName}`, value);
}

function removeData(dataName) {
    return this.element.removeAttribute(`data-${dataName}`);
}

function closestData(dataName) {
    return this.element.closest(`[data-${dataName}]`);
}

function matchData(dataName, value) {
    return this.element.matches(`[data-${dataName}="${value}"]`);
}

export {getData, hasData, setData, removeData, closestData, matchData};
