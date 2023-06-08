function addEvent() {
    EventTarget.prototype.addEvent = function (
        eventName,
        handler,
        boolean = false
    ) {
        this.addEventListener(eventName, handler, boolean);

        return this;
    };

    return this;
}

function removeEvent() {
    EventTarget.prototype.removeEvent = function (
        eventName,
        handler,
        boolean = false
    ) {
        this.removeEventListener(eventName, handler, boolean);

        return this;
    };

    return this;
}

export {addEvent, removeEvent};
