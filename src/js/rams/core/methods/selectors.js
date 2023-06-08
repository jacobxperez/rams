function selector() {
    Node.prototype.selector = function (selector) {
        return this.querySelector(selector);
    };

    return this;
}

function selectorAll() {
    Node.prototype.selectorAll= function (selector) {
        return this.querySelectorAll(selector);
    };

    return this;
}

export {selector, selectorAll};
