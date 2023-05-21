import {Rams} from '../master.js';

class Select extends Rams {
    select(selector) {
        return document.querySelector(selector);
    }
}

class SelectAll extends Rams {
    selectAll(selector) {
        return document.querySelectorAll(selector);
    }
}

function select(selector) {
    return new Select(selector);
}

function selectAll(selector) {
    return new SelectAll(selector);
}

export {select, selectAll};
