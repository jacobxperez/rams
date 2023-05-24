import {Rams} from './rams.js';
// entry methods from the rams object to the Rams class

function onload(handler, boolean = this.options) {
    return new Rams().onload(handler, boolean);
}

function select(selector) {
    return new Rams(selector);
}

function selectAll(selector) {
    return new Rams(selector);
}

export {onload, select, selectAll};
