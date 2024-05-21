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
// import {template} from './core/components/template.js';

class Rams {
    constructor() {
        Rams.init();
        this.toggle = toggle;
        // this.carousel = carousel;
        // this.template = template;
    }

    static init() {
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
    // template;
}

export const rams = new Rams();
