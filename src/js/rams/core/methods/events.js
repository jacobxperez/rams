import {Rams} from '../../rams.js';

function onload(handler, boolean = false) {
    if (this.selector === null) {
        window.addEventListener('load', handler, boolean);
        return new Rams(this.selector);
    } else {
        this.selector.addEventListener('load', handler, boolean);
        return new Rams(this.selector);
    }
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