import {dom} from './core/methods/dom.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';
import {compiler} from './core/components/compiler.js';

class RAMS {
    constructor() {
        this.dom = dom;
        this.toggle = toggle;
        this.callback = callback;
        this.compiler = compiler;
    }

    dom;
    toggle;
    callback;
    compiler;
}

export const r = new RAMS();
