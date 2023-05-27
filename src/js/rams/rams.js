// methods
import {select, selectAll} from './core/methods/selectors.js';
import {
    create,
    clone,
    append,
    appendCreated,
    appendCloned,
} from './core/methods/dom.js';
import {
    getData,
    setData,
    hasData,
    removeData,
    closestData,
    matchData,
} from './core/methods/data.js';
import {onload, addEvent, removeEvent, click} from './core/methods/events.js';
import {each, eachOf} from './core/methods/loops.js';
import {callback} from './core/methods/callbacks.js';

// components
import {toggle} from './core/components/toggle.js';
import {carousel} from './core/components/carousel.js';

class Rams extends Array {
    constructor(selector = null) {
        super();
        this.selector = selector;
        this.createdSet = [];
        this.clonedSet = [];
        this.select = select;
        this.selectAll = selectAll;
        this.create = create;
        this.clone = clone;
        this.append = append;
        this.appendCreated = appendCreated;
        this.appendCloned = appendCloned;
        this.getData = getData;
        this.setData = setData;
        this.hasData = hasData;
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
    appendCreated;
    appendCloned;
    getData;
    setData;
    hasData;
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

const rams = new Rams();

export {Rams, rams};
