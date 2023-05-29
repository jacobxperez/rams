function create(element) {
    const newElement = document.createElement(element)
    this.selected = newElement;
    this.push(newElement);

    return this;
}

function clone(boolean = true) {
    const cloned = this.selected.cloneNode(boolean)
    this.selected = cloned;

    return this;
}

function append(...elements) {
    this.selected.append(elements);

    return this;
}

export {create, clone, append};
