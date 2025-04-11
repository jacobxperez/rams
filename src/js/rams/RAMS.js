import {toggle} from './core/components/toggle.js';
import {
    getFirstWithDataAttr,
    getAllWithDataAttr,
    setDataAttr,
    appendDataAttrValue,
    removeDataAttr,
    removeDataAttrValue,
    replaceDataAttrValue,
    hasDataAttr,
    dataAttrIsEmpty,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
    toggleDataAttrValue,
} from './core/dom/data.js';

class RAMS {
    constructor() {
        // Components
        this.toggle = toggle;

        // Data Attribute Methods
        this.getFirstWithDataAttr = getFirstWithDataAttr;
        this.getAllWithDataAttr = getAllWithDataAttr;
        this.setDataAttr = setDataAttr;
        this.appendDataAttrValue = appendDataAttrValue;
        this.removeDataAttr = removeDataAttr;
        this.removeDataAttrValue = removeDataAttrValue;
        this.replaceDataAttrValue = replaceDataAttrValue;
        this.hasDataAttr = hasDataAttr;
        this.dataAttrIsEmpty = dataAttrIsEmpty;
        this.closestDataAttr = closestDataAttr;
        this.matchesDataAttr = matchesDataAttr;
        this.toggleDataAttr = toggleDataAttr;
        this.toggleDataAttrValue = toggleDataAttrValue;
    }
}

export const r = new RAMS();
