function selector(element, selector) {
    return element.querySelector(selector);
}

function selectorAll(element, selector) {
    return element.querySelectorAll(selector);
}

export {selector, selectorAll};
