function create(element) {
    this.newElement = document.createElement(element);
    return this;
}

function clone(boolean = false) {
    this.cloneElement = this.newElement.cloneNode(boolean);
    return this;
}

function append(...args) {
    // this.forEach((selector) => {
    //     selector.append(args);
    // });
    this.selector.append(this.cloneElement || args);
    return this;
}

function getData(dataName, value) {
    value
        ? this.forEach((selector) => {
              selector.getAttribute(`data-${dataName}="${value}"`);
          })
        : this.forEach((selector) => {
              selector.getAttribute(`data-${dataName}`);
          });

    return this;
}

function hasData(dataName, value) {
    return value
        ? this.forEach((selector) => {
              selector.hasAttribute(`data-${dataName}="${value}"`);
          })
        : this.forEach((selector) => {
              selector.hasAttribute(`[data-${dataName}]`);
          });

    // if (value) {
    //     return this.selector.hasAttribute(`data-${dataName}="${value}"`);
    // } else {
    //     return this.selector.hasAttribute(`[data-${dataName}]`);
    // }
}

function setData(dataName, value) {
    // this.forEach((selector) => {
    //     selector.setAttribute(`data-${dataName}`, value);
    // });
    
    this.selector.setAttribute(`data-${dataName}`, value);
    return this;
}

function removeData(dataName) {
    // this.forEach((selector) => {
    //     selector.removeAttribute(`data-${dataName}`);
    // });

    this.selector.removeAttribute(`data-${dataName}`);
    return this;
}

function closestData(dataName, value) {
    value
        ? this.selector.closest(`[data-${dataName}="${value}"]`)
        : this.selector.closest(`[data-${dataName}]`);
    return this;
}

function matchData(dataName, value) {
    if (value) {
        return this.selector.matches(`data-${dataName}="${value}"`);
    } else {
        return this.selector.matches(`[data-${dataName}]`);
    }
}

export {
    create,
    clone,
    append,
    getData,
    hasData,
    setData,
    removeData,
    closestData,
    matchData,
};
