import {dataAttr} from './core/methods/dataAttr.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';

class RAMS {
    constructor() {
        this.dataAttr = dataAttr;
        this.toggle = toggle;
        this.callback = callback;
    }

    dataAttr;
    toggle;
    callback;
}

export const rams = new RAMS();
