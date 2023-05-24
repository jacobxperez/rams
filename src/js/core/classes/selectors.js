import {Rams} from '../classes/master.js';

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
