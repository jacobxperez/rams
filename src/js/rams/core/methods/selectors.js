function select(selector = this.selector) {
    if (
        selector === window ||
        selector === document ||
        selector instanceof Array ||
        selector instanceof NodeList ||
        selector instanceof Element ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selector = selector;
        return this;
    }

    if (Object.prototype.toString.call(selector) === '[object String]') {
        this.selector = document.querySelector(selector);

        return this;
    } else {
        return console.error(`${this.selector} is not a valid selector`);
    }
}

function selectAll(selector = this.selector) {
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
        return console.error(`${this.selector} is not a valid selector`);
    }
}

export {select, selectAll};
