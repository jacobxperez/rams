export function addEvent(element, eventName, handler, options = false) {
    return element.addEventListener(eventName, handler, options);
}
