import {addEvent, removeEvent} from './core/methods/events.js';
import {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchDataAttr,
    toggleDataAttr,
} from './core/methods/data.js';
import {toggle} from './core/components/toggle.js';
import {carousel} from './core/components/carousel.js';

class Rams {
    constructor() {
        Rams.#extensions();
        this.toggle = toggle;
        this.carousel = carousel;
    }

    static #extensions() {
        // Events
        addEvent();
        removeEvent();
        // Elements
        setDataAttr();
        removeDataAttr();
        getDataAttr();
        hasDataAttr();
        closestDataAttr();
        matchDataAttr();
        toggleDataAttr();
    }
    // Components
    toggle;
    carousel;
}

const rams = new Rams();

export {rams};
