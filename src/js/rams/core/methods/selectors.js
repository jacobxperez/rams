function select(selector = this.selector) {
    if (selector === 'String') {
        this.selector = document.querySelector(selector);
        return this;
    } else if (
        selector === window ||
        selector === document ||
        selector instanceof Element ||
        selector instanceof Array ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selector = selector;
        return this;
    } else {
        console.error(`${this.selector} is not a valid selector`);
        return this;
    }
}

function selectAll(selector = this.selector) {
    if (selector === 'String') {
        this.selector = document.querySelectorAll(selector);
        return this;
    } else if (
        selector instanceof Array ||
        selector instanceof Map ||
        selector instanceof Set
    ) {
        this.selector = selector;
        return this;
    } else {
        console.error(`${this.selector} is not a valid selector`);
        return this;
    }
}

export {select, selectAll};
