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
} from './core/functions/data.js';
// import {
//     observe,
//     disconnectObserver,
//     debouncedObserver,
// } from './core/functions/observers.js';
import {callback} from './core/utilities/callbacks.js';
import {toggle} from './core/components/toggle.js';

class RAMS {
    constructor() {
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
        this.dataAttrIsEmpty = dataAttrIsEmpty;
        this.closestDataAttr = closestDataAttr;
        this.matchesDataAttr = matchesDataAttr;
        this.toggleDataAttr = toggleDataAttr;
        this.toggleDataAttrValue = toggleDataAttrValue;
        // Observers
        // this.observe = observe;
        // this.disconnectObserver = disconnectObserver;
        // this.debouncedObserver = debouncedObserver;
    }
}

export const r = new RAMS();
