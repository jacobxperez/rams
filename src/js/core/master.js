import {
    select,
    selectAll,
    create,
    getData,
    hasData,
    setData,
    removeData,
    closestData,
    matchData,
} from './functions/dom.js';
import {addEvent, removeEvent, click} from './functions/events.js';
import {each, eachOf} from './functions/loops.js';
import {callback} from './functions/callbacks.js';

class Rams {
    constructor(selector) {
        this.selector = selector;
        this.select = select;
        this.selectAll = selectAll;
        this.create = create;
        this.getData = getData;
        this.hasData = hasData;
        this.setData = setData;
        this.removeData = removeData;
        this.closestData = closestData;
        this.matchData = matchData;
        this.addEvent = addEvent;
        this.removeEvent = removeEvent;
        this.click = click;
        this.each = each;
        this.eachOf = eachOf;
        this.callback = callback;
    }

    select;
    selectAll;
    create;
    getData;
    hasData;
    setData;
    removeData;
    closestData;
    matchData;
    addEvent;
    removeEvent;
    click;
    each;
    eachOf;
    callback;
}

export {Rams};
