import {Rams} from '../classes/master.js';

function select(selector) {
    return new Rams(selector);
}

function selectAll(selector) {
    return new Rams(selector);
}

export {select, selectAll};
