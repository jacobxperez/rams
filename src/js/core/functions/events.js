function addEvent(eventName, handler, options = false) {
    return this.selector.addEventListener(eventName, handler, options);
}

function removeEvent(eventName, handler, options = false) {
    return this.selector.removeEventListener(eventName, handler, options);
}

export {addEvent, removeEvent};
