import {dom} from './core/methods/dom.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';

class RAMS {
    constructor() {
        this.dom = dom;
        this.toggle = toggle;
        this.callback = callback;
    }

    dom;
    toggle;
    callback;
}

export const r = new RAMS();
