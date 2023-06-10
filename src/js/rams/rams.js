import {addEvent, removeEvent} from './core/methods/events.js';
import {selector, selectorAll} from './core/methods/selectors.js';
import {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchDataAttr,
} from './core/methods/data.js';
import {toggle} from './core/components/toggle.js';
import {carousel} from './core/components/carousel.js';

const rams = {
    // Events
    events() {
        addEvent();
        removeEvent();
        return this;
    },
    // Selectors
    selectors() {
        selector();
        selectorAll();
        return this;
    },
    // Elements
    elements() {
        setDataAttr();
        removeDataAttr();
        getDataAttr();
        hasDataAttr();
        closestDataAttr();
        matchDataAttr();
        return this;
    },
    // Components
    toggle,
    carousel,
};

export {rams};

rams.events().selectors().elements();
