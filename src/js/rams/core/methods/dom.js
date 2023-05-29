function create(element) {
    const newElement = document.createElement(element);
    this.selector = newElement;
    this.push(newElement);

    return this;
}

function clone(boolean = true) {
    const cloned = this.selector.cloneNode(boolean);
    this.selector = cloned;

    return this;
}

function append(...elements) {
    this.selector.append(elements);

    return this;
}

export {create, clone, append};
