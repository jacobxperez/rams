import {Rams} from '../classes/rams.js';

function onload(handler, boolean = false) {
    this.selector.addEventListener('load', handler, boolean);
    return new Rams(this.selector);
}

function addEvent(eventName, handler, boolean = false) {
    this.selector.addEventListener(eventName, handler, boolean);
    return new Rams(this.selector);
}

function removeEvent(eventName, handler, boolean = false) {
    this.selector.removeEventListener(eventName, handler, boolean);
    return new Rams(this.selector);
}

function click(handler, boolean = false) {
    this.selector.addEventListener('click', handler, boolean);
    return new Rams(this.selector);
}

export {onload, addEvent, removeEvent, click};
