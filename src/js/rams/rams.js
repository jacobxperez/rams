import {addEvent, removeEvent} from './core/methods/events.js';
import {selector, selectorAll} from './core/methods/selectors.js';
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
        this.#extensions();
        this.toggle = toggle;
        this.carousel = carousel;
    }

    #extensions() {
        // Events
        addEvent();
        removeEvent();
        // Selectors
        selector();
        selectorAll();
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
