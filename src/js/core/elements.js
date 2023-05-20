class Element {
    constructor(element) {
        this.element = element;
    }

    getData(dataName) {
        return this.element.getAttribute(`data-${dataName}`);
    }

    hasData(dataName, value) {
        return e(this.element).getData(dataName) === value;
    }

    setData(dataName, value) {
        return this.element.setAttribute(`data-${dataName}`, value);
    }

    removeData(dataName) {
        return this.element.removeAttribute(`data-${dataName}`);
    }

    closestData(dataName) {
        return this.element.closest(`[data-${dataName}]`);
    }

    matchData(dataName, value) {
        if (value) {
            return this.element.matches(`[data-${dataName}="${value}"]`);
        } else {
            return this.element.matches(`[data-${dataName}`);
        }
    }

    each(callback) {
        if (callback && typeof(callback) == 'function') {
            for (let i = 0; i < this.length; i++) {
                callback(this[i], i);
            }
            return this;
        } 
    }

    addEvent(eventName, handler, options = false) {
        return this.element.addEventListener(eventName, handler, options);
    }

    removeEvent(eventName, handler, options = false) {
        return this.element.removeEventListener(eventName, handler, options);
    }
}

function e(element) {
    return new Element(element);
}

export {Element, e};
