function select(selector = this.selected) {
    if (
        selector === window ||
        selector === document ||
        selector instanceof Array ||
        selector instanceof NodeList ||
        selector instanceof Element ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selected = selector;
        return this;
    }

    if (Object.prototype.toString.call(selector) === '[object String]') {
        this.selected = document.querySelector(selector);

        return this;
    } else {
        return console.error(`${this.selected} is not a valid selector`);
    }
}

function selectAll(selector = this.selected) {
    if (selector instanceof Array || selector instanceof NodeList) {
        selector.forEach((item) => {
            if (item instanceof Element) {
                this.push(item)
            }
        });
        return this;
    }

    if (Object.prototype.toString.call(selector) === '[object String]') {
        const selected = document.querySelectorAll(selector);
        selected.forEach((item) => this.push(item));

        return this;
    } else {
        return console.error(`${this.selected} is not a valid selector`);
    }
}

function index(i = 0) {
    if (typeof(i) === 'number') {
        this.selected = this[i];
    } else {
        return console.error(`${i} is not a valid index number`);
    }

    return this;
}

export {select, selectAll, index};
