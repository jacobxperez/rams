import {Rams} from './master.js';
// entry methods from from the rams object to the master class

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
