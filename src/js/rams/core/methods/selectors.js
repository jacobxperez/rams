function select(selector = this.selector) {
    if (
        selector === window ||
        selector === document ||
        selector instanceof Object
    ) {
        this.selector = selector;
        return this;
    }

    if (selector instanceof Element) {
        this.selector = selector;

        return this;
    }

    if (Object.prototype.toString.call(selector) === '[object String]') {
        this.selector = document.querySelector(selector);

        return this;
    } else {
        return console.error(`${selector} is not a valid selector`);
    }
}

function selectAll(selector = this.selector) {
    if (selector instanceof Array || selector instanceof NodeList) {
        selector.forEach((item) => {
            if (item instanceof Element) {
                this.push(item);
            }
        });

        this.selector = this[0];

        return this;
    }

    if (
        Object.prototype.toString.call(selector) === '[object String]' ||
        selector instanceof Element
    ) {
        const selected = document.querySelectorAll(selector);
        selected.forEach((item) => this.push(item));
        this.selector = this[0];

        return this;
    } else {
        return console.error(`${selector} is not a valid selector`);
    }
}

function index(i = 0) {
    if (typeof i === 'number') {
        this.selector = this[i];
    } else {
        return console.error(`${i} is not a valid index number`);
    }

    return this;
}

export {select, selectAll, index};
