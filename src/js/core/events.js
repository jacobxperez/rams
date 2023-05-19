function addEvent(eventName, handler, options = false) {
    return this.element.addEventListener(eventName, handler, options);
}

function removeEvent(eventName, handler, options = false) {
    return this.element.removeEventListener(eventName, handler, options);
}

export {addEvent, removeEvent};
