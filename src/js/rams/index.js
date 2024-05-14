import {addEvent, removeEvent} from './core/methods/events.js';
import {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
} from './core/methods/data.js';
import {toggle} from './core/components/toggle.js';

class Rams {
    constructor() {
        this.toggle = toggle;
        this.addEvent = addEvent;
        this.removeEvent = removeEvent;
        this.setDataAttr = setDataAttr;
        this.removeDataAttr = removeDataAttr;
        this.getDataAttr = getDataAttr;
        this.hasDataAttr = hasDataAttr;
        this.closestDataAttr = closestDataAttr;
        this.matchesDataAttr = matchesDataAttr;
        this.toggleDataAttr = toggleDataAttr;
    }

    toggle;
    addEvent;
    removeEvent;
    setDataAttr;
    removeDataAttr;
    getDataAttr;
    hasDataAttr;
    closestDataAttr;
    matchesDataAttr;
    toggleDataAttr;
}

const rams = new Rams();

export {rams};
