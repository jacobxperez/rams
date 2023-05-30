function create(...element) {
    element.forEach((element) => {
        this.selector = document.createElement(element);
        this.push(this.selector);
    })

    return this;
}

function clone(boolean = false) {
    this.selector = this.selector.cloneNode(boolean);

    return this;
}

function append(...elements) {
    this.selector.append(elements);

    return this;
}

export {create, clone, append};
