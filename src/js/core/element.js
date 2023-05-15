function getData(element, attributeName) {
    return element.getAttribute('data-' + attributeName);
}

function setData(element, attributeName, value) {
    element.setAttribute('data-' + attributeName, value);
}

function removeData(element, attributeName) {
    element.removeAttribute('data-' + attributeName);
}

function closestData(element, attributeName) {
    return element.closest(`[data-${attributeName}]`);
}

export {getData, setData, removeData, closestData};
