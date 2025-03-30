import {dataAttr} from './core/methods/data.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';
// import {carousel} from './core/components/carousel.js';
// import {template} from './core/components/template.js';

class Rams {
    constructor() {
        this.dataAttr = dataAttr;
        this.toggle = toggle;
        this.callback = callback;
        // this.carousel = carousel;
        // this.template = template;
    }

    dataAttr;
    toggle;
    callback;
    // carousel;
    // template;
}

export const rams = new Rams();
