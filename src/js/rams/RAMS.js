import {
    getFirstWithDataAttr,
    getAllWithDataAttr,
    setDataAttr,
    appendDataAttrValue,
    removeDataAttr,
    removeDataAttrValue,
    replaceDataAttrValue,
    hasDataAttr,
    isEmpty,
    closestDataAttr,
    matchesDataAttr,
    toggleDataAttr,
    toggleDataAttrValue,
    observe,
    disconnectObserver,
    debouncedObserver,
} from './core/methods/dom.js';

import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';

class RAMS extends Array {
    constructor() {
        super();
        // Components
        this.toggle = toggle;
        this.callback = callback;
        // DOM Methods
        this.getFirstWithDataAttr = getFirstWithDataAttr;
        this.getAllWithDataAttr = getAllWithDataAttr;
        this.setDataAttr = setDataAttr;
        this.appendDataAttrValue = appendDataAttrValue;
        this.removeDataAttr = removeDataAttr;
        this.removeDataAttrValue = removeDataAttrValue;
        this.replaceDataAttrValue = replaceDataAttrValue;
        this.hasDataAttr = hasDataAttr;
        this.isEmpty = isEmpty;
        this.closestDataAttr = closestDataAttr;
        this.matchesDataAttr = matchesDataAttr;
        this.toggleDataAttr = toggleDataAttr;
        this.toggleDataAttrValue = toggleDataAttrValue;
        this.observe = observe;
        this.disconnectObserver = disconnectObserver;
        this.debouncedObserver = debouncedObserver;
    }
}

export const r = new RAMS();
