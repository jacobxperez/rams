import {
    select,
    selectAll,
    getData,
    hasData,
    setData,
    removeData,
    closestData,
    matchData,
} from './functions/dom.js';
import {addEvent, removeEvent} from './functions/events.js';
import {each} from './functions/loops.js';

class Rams {
    constructor(selector) {
        this.selector = selector;
        this.select = select;
        this.selectAll = selectAll;
        this.getData = getData;
        this.hasData = hasData;
        this.setData = setData;
        this.removeData = removeData;
        this.closestData = closestData;
        this.matchData = matchData;
        this.addEvent = addEvent;
        this.removeEvent = removeEvent;
        this.each = each;
    }

    select;
    selectAll;
    getData;
    hasData;
    setData;
    removeData;
    closestData;
    matchData;
    addEvent;
    removeEvent;
    each;
}

export {Rams};
