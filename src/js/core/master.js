class Rams {
    constructor(element) {
        this.element = element;
    }

    select(element) {
        return document.querySelector(element);
    }

    selectAll(element) {
        return document.querySelectorAll(element);
    }

    getData(dataName) {
        return this.element.getAttribute(`data-${dataName}`);
    }

    hasData(dataName, value) {
        return this.element.getAttribute(`data-${dataName}`) === value;
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

class Select extends Rams {
    select(element) {
        return document.querySelector(element);
    }
}

class SelectAll extends Rams {
    selectAll(element) {
        return document.querySelectorAll(element);
    }
}

function select(element) {
    return new Select(element);
}

function selectAll(element) {
    return new SelectAll(element);
}

export {select, selectAll};
