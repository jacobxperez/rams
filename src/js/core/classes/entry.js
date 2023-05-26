import {Rams} from './rams.js';
// entry methods from the rams object to the Rams class

function onload(handler, boolean = false) {
    return new Rams(window).onload(handler, boolean);
}

function select(selector) {
    return new Rams(selector).select();
}

function selectAll(selector) {
    return new Rams(selector).selectAll();
}

function create(element) {
    return new Rams(document).create(element);
}

export {onload, select, selectAll, create};
