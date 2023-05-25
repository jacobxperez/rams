import {Rams} from './rams.js';
// entry methods from the rams object to the Rams class

function onload(handler, boolean = this.options) {
    return new Rams(window).onload(handler, boolean);
}

function select(selector) {
    return new Rams(selector);
}

function selectAll(selector) {
    return new Rams(selector);
}

function create(element) {
    return new Rams(document).create(element);
}

export {onload, select, selectAll, create};
