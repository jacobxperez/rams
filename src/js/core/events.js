export function addEvent(eventName, handler, options = false) {
    return this.element.addEventListener(eventName, handler, options);
}
