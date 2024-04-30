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
        this.setDataAttr = setDataAttr;
        this.removeDataAttr = removeDataAttr;
        this.getDataAttr = getDataAttr;
        this.hasDataAttr = hasDataAttr;
        this.closestDataAttr = closestDataAttr;
        this.matchesDataAttr = matchesDataAttr;
        this.toggleDataAttr = toggleDataAttr;
    }

    toggle;
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
