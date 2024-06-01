import {
    setDataAttr,
    removeDataAttr,
    getDataAttr,
    hasDataAttr,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
} from './core/methods/data.js';
import {queryDataAttr, queryDataAttrAll} from './core/methods/selectors.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';
// import {carousel} from './core/components/carousel.js';
// import {template} from './core/components/template.js';

class Rams {
    constructor() {
        Rams.init();
        this.toggle = toggle;
        this.callback = callback;
        // this.carousel = carousel;
        // this.template = template;
    }

    static init() {
        setDataAttr();
        removeDataAttr();
        getDataAttr();
        hasDataAttr();
        closestDataAttr();
        matchesDataAttr();
        toggleDataAttr();
        queryDataAttr();
        queryDataAttrAll();
    }

    toggle;
    callback;
    // carousel;
    // template;
}

export const rams = new Rams();
