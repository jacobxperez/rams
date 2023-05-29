function onload(handler, boolean = false) {
    if (this.selector === null) {
        window.addEventListener('load', handler, boolean);
        
        return this;
    } else {
        this.selected.addEventListener('load', handler, boolean);
        
        return this;
    }
}

function addEvent(eventName, handler, boolean = false) {
    this.selected.addEventListener(eventName, handler, boolean);
    
    return this;
}

function removeEvent(eventName, handler, boolean = false) {
    this.selected.removeEventListener(eventName, handler, boolean);
    
    return this;
}

function click(handler, boolean = false) {
    this.selected.addEventListener('click', handler, boolean);
    
    return this;
}

export {onload, addEvent, removeEvent, click};
