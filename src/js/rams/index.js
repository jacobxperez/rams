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
// import {templateGenerator} from './core/components/templateGenerator.js';

class Rams {
    constructor() {
        Rams.#init();
        this.toggle = toggle;
        // this.carousel = carousel;
        // this.templateGenerator = templateGenerator;
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
    // templateGenerator;
}

const rams = new Rams();

export {rams};
