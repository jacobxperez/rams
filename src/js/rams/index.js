import {data} from './core/methods/data.js';
import {callback} from './core/methods/callbacks.js';
import {toggle} from './core/components/toggle.js';
// import {carousel} from './core/components/carousel.js';
// import {template} from './core/components/template.js';

class Rams {
    constructor() {
        this.data = data;
        this.toggle = toggle;
        this.callback = callback;
        // this.carousel = carousel;
        // this.template = template;
    }

    data;
    toggle;
    callback;
    // carousel;
    // template;
}

export const rams = new Rams();
