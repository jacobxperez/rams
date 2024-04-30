function addEvent(element, eventName, handler, boolean = false) {
    return element.addEventListener(eventName, handler, boolean);
}

function removeEvent(element, eventName, handler, boolean = false) {
    return element.removeEventListener(eventName, handler, boolean);
}

export {addEvent, removeEvent};
