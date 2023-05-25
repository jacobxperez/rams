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
    create,
    clone,
    append,
} from '../methods/dom.js';
import {onload, addEvent, removeEvent, click} from '../methods/events.js';
import {each, eachOf} from '../methods/loops.js';
import {callback} from '../methods/callbacks.js';
import {toggle} from '../components/toggle.js';
import {carousel} from '../components/carousel.js';

class Rams {
    constructor(selector) {
        this.selector = selector;
        this.select = select;
        this.selectAll = selectAll;
        this.create = create;
        this.clone = clone;
        this.append = append;
        this.getData = getData;
        this.hasData = hasData;
        this.setData = setData;
        this.removeData = removeData;
        this.closestData = closestData;
        this.matchData = matchData;
        this.addEvent = addEvent;
        this.removeEvent = removeEvent;
        this.onload = onload;
        this.click = click;
        this.each = each;
        this.eachOf = eachOf;
        this.callback = callback;
        this.toggle = toggle;
        this.carousel = carousel;
    }

    onload;
    select;
    selectAll;
    create;
    clone;
    append;
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
    toggle;
    carousel;
}

export {Rams};
