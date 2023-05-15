function getData(element, attributeName) {
    return element.getAttribute(`data-${attributeName}`);
}

function setData(element, attributeName, value) {
    return element.setAttribute(`data-${attributeName}`, value);
}

function removeData(element, attributeName) {
    return element.removeAttribute(`data-${attributeName}`);
}

function closestData(element, attributeName) {
    return element.closest(`[data-${attributeName}]`);
}

export {getData, setData, removeData, closestData};
