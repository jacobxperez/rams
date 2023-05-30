// methods
import {select, selectAll, index} from './core/methods/selectors.js';
import {create, clone, append} from './core/methods/dom.js';
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
// import {carousel} from './core/components/carousel.js';

class Rams extends Array {
    constructor(selector = null) {
        super();
        this._selector = selector;
        this.select = select;
        this.selectAll = selectAll;
        this.index = index;
        this.create = create;
        this.clone = clone;
        this.append = append;
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
        // this.carousel = carousel;
    }

    get selector() {
        if (this._selector === null) {
            console.error('You need to select a valid Element');
        } else {
            return this._selector;
        }
    }
    set selector(val) {
        this._selector = val;
    }
    onload;
    select;
    selectAll;
    index;
    create;
    clone;
    append;
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
