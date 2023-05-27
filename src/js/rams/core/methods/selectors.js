function select(selector = this.selector) {
    if (Object.prototype.toString.call(selector) == '[object String]') {
        this.selector = document.querySelector(selector);
        this.push(this.selector);
    } else if (
        selector === window ||
        selector === document ||
        selector instanceof Element ||
        selector instanceof Array ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selector = selector;
    } else {
        console.error(`${this.selector} is not a valid selector`);
    }

    return this;
}

function selectAll(selector = this.selector) {
    if (Object.prototype.toString.call(selector) == '[object String]') {
        const selected = document.querySelectorAll(selector);
        selected.forEach((item) => this.push(item));
    } else if (
        selector instanceof Array ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selector = selector;
    } else {
        console.error(`${this.selector} is not a valid selector`);
    }

    return this;
}

export {select, selectAll};
