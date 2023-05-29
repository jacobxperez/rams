function select(selector = this.selected) {
    if (
        selector === window ||
        selector === document ||
        selector instanceof Object
    ) {
        this.selected = selector;
        return this;
    }

    if (selector instanceof Element) {
        this.selected = selector;

        return this;
    }

    if (Object.prototype.toString.call(selector) === '[object String]') {
        this.selected = document.querySelector(selector);

        return this;
    } else {
        return console.error(`${selector} is not a valid selector`);
    }
}

function selectAll(selector = this.selected) {
    if (selector instanceof Array || selector instanceof NodeList) {
        selector.forEach((item) => {
            if (item instanceof Element) {
                this.push(item);
            }
        });

        this.selected = this[0];

        return this;
    }

    if (
        Object.prototype.toString.call(selector) === '[object String]' ||
        selector instanceof Element
    ) {
        const selected = document.querySelectorAll(selector);
        selected.forEach((item) => this.push(item));
        this.selected = this[0];

        return this;
    } else {
        return console.error(`${selector} is not a valid selector`);
    }
}

function index(i = 0) {
    if (typeof i === 'number') {
        this.selected = this[i];
    } else {
        return console.error(`${i} is not a valid index number`);
    }

    return this;
}

export {select, selectAll, index};
