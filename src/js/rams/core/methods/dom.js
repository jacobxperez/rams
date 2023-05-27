function create(element) {
    this.createdSet.push(document.createElement(element));

    return this;
}

function clone(boolean = true) {
    this.clonedSet.push(this.selector.cloneNode(boolean));

    return this;
}

function append(...elements) {
    this.selector.append(elements);

    return this;
}

function appendCreated(index = 0, count) {
    if (count) {
        for (var i = 0; i < count; i++) {
            const clone = this.createdSet[index].cloneNode(true);
            this.selector.append(clone);
        }
    } else {
        const clone = this.createdSet[index].cloneNode(true);
        this.selector.append(clone);
    }

    return this;
}

function appendCloned(index = 0, count) {
    if (count) {
        for (var i = 0; i < count; i++) {
            const clone = this.clonedSet[index].cloneNode(true);
            this.selector.append(clone);
        }
    } else {
        const clone = this.clonedSet[index].cloneNode(true);
        this.selector.append(clone);
    }

    return this;
}

export {create, clone, append, appendCreated, appendCloned};
