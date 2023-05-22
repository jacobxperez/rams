import {Rams} from '../master.js';

class Select extends Rams {
    select() {
        super.select();
    }
}

class SelectAll extends Rams {
    selectAll() {
        super.selectAll();
    }
}

function select(selector) {
    return new Select(selector);
}

function selectAll(selector) {
    return new SelectAll(selector);
}

export {select, selectAll};
