import {Rams} from '../master.js';

function onload(handler, boolean = this.boolean) {
    this.selector.addEventListener('load', handler, boolean);
    return new Rams(this.selector);
}

function addEvent(eventName, handler, boolean = this.boolean) {
    this.selector.addEventListener(eventName, handler, boolean);
    return new Rams(this.selector);
}

function removeEvent(eventName, handler, boolean = this.boolean) {
    this.selector.removeEventListener(eventName, handler, boolean);
    return new Rams(this.selector);
}

function click(handler, boolean = this.boolean) {
    this.selector.addEventListener('click', handler, boolean);
    return new Rams(this.selector);
}

export {onload, addEvent, removeEvent, click};