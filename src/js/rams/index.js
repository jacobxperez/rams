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
// import {carousel} from './core/components/carousel.js';

class Rams {
    constructor() {
        Rams.#init();
        this.toggle = toggle;
        // this.carousel = carousel;
    }

    static #init() {
        // Data Attributes
        setDataAttr();
        removeDataAttr();
        getDataAttr();
        hasDataAttr();
        closestDataAttr();
        matchesDataAttr();
        toggleDataAttr();
    }
    // Components
    toggle;
    // carousel;
}

const rams = new Rams();

export {rams};
