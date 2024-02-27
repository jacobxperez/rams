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
        Rams.#init();
        this.toggle = toggle;
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
}

const rams = new Rams();

export {rams};
