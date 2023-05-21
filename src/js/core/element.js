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

    closestData(dataName, value) {
        return value
            ? this.element.closest(`[data-${dataName}="${value}"]`)
            : this.element.closest(`[data-${dataName}`);
    }

    matchData(dataName, value) {
        return value
            ? this.element.matches(`[data-${dataName}="${value}"]`)
            : this.element.matches(`[data-${dataName}`);
    }

    each(callback) {
        if (callback && typeof callback == 'function') {
            var arr = this.element;

            if (!Array.isArray(this.element))
                var arr = Array.from(this.element);

            for (let i = 0; i < arr.length; i++) {
                callback(arr[i], i);
            }

            // for (const element of this.element) {
            //     callback(element);
            // }

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
