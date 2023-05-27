function onload(handler, boolean = false) {
    if (this.selector === null) {
        window.addEventListener('load', handler, boolean);
        
        return this;
    } else {
        this.selector.addEventListener('load', handler, boolean);
        
        return this;
    }
}

function addEvent(eventName, handler, boolean = false) {
    this.selector.addEventListener(eventName, handler, boolean);
    
    return this;
}

function removeEvent(eventName, handler, boolean = false) {
    this.selector.removeEventListener(eventName, handler, boolean);
    
    return this;
}

function click(handler, boolean = false) {
    this.selector.addEventListener('click', handler, boolean);
    
    return this;
}

export {onload, addEvent, removeEvent, click};
