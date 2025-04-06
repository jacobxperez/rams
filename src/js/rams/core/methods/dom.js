import {validate} from '../utilities/validator.js';

export function getDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.getDataAttr') ||
        !validate.dataName(dataName, 'dom.getDataAttr') ||
        !validate.dataAttrValue(value, 'dom.getDataAttr')
    )
        return null;
    return root.querySelector(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function getAllDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.getAllDataAttr') ||
        !validate.dataName(dataName, 'dom.getAllDataAttr') ||
        !validate.dataAttrValue(value, 'dom.getAllDataAttr')
    )
        return [];
    return Array.from(
        root.querySelectorAll(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        )
    );
}

export function setDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.setDataAttr') ||
        !validate.dataName(dataName, 'dom.setDataAttr') ||
        !validate.dataAttrValue(value, 'dom.setDataAttr')
    )
        return false;
    root.setAttribute(`data-${dataName}`, value);
    return true;
}

export function appendDataAttrValue(root, dataName, value) {
    if (
        !validate.domElement(root, 'dom.appendDataAttrValue') ||
        !validate.dataName(dataName, 'dom.appendDataAttrValue') ||
        !validate.dataAttrValue(value, 'dom.appendDataAttrValue')
    )
        return false;

    let currentValue = root.getAttribute(`data-${dataName}`);
    let values = new Set(currentValue ? currentValue.trim().split(/\s+/) : []);

    if (!values.has(value)) {
        values.add(value);
        root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
        return true;
    }

    return false;
}

export function removeDataAttr(root, dataName) {
    if (
        !validate.domElement(root, 'dom.removeDataAttr') ||
        !validate.dataName(dataName, 'dom.removeDataAttr')
    )
        return false;
    root.removeAttribute(`data-${dataName}`);
    return true;
}

export function removeDataAttrValue(root, dataName, value) {
    if (
        !validate.domElement(root, 'dom.removeDataAttrValue') ||
        !validate.dataName(dataName, 'dom.removeDataAttrValue') ||
        !validate.dataAttrValue(value, 'dom.removeDataAttrValue')
    )
        return false;
    let currentValue = root.getAttribute(`data-${dataName}`);

    if (!currentValue) {
        console.warn(
            `[RAMS] dom.removeDataAttrValue: Attribute "data-${dataName}" does not exist.`
        );
        return false;
    }

    let values = new Set(currentValue.trim().split(/\s+/));
    values.delete(value);

    if (values.size > 0) {
        root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
    } else {
        root.removeAttribute(`data-${dataName}`);
    }

    return true;
}

export function replaceDataAttrValue(root, dataName, oldValue, newValue) {
    if (
        !validate.domElement(root, 'dom.replaceDataAttrValue') ||
        !validate.dataName(dataName, 'dom.replaceDataAttrValue') ||
        !validate.dataAttrValue(oldValue, 'dom.replaceDataAttrValue') ||
        !validate.dataAttrValue(newValue, 'dom.replaceDataAttrValue')
    )
        return false;

    let currentValue = root.getAttribute(`data-${dataName}`);
    if (!currentValue) return false;

    let values = currentValue.trim().split(/\s+/);
    let index = values.indexOf(oldValue);

    if (index === -1) return false;

    values[index] = newValue;

    root.setAttribute(`data-${dataName}`, values.join(' '));
    return true;
}

export function hasDataAttr(root, dataName, value = null) {
    const methodName = 'dom.hasDataAttr';
    if (
        !validate.domElement(root, methodName) ||
        !validate.dataName(dataName, methodName)
    )
        return false;

    if (!root.hasAttribute(`data-${dataName}`)) return false;

    if (value === null) return true;

    if (!validate.dataAttrValue(value, methodName)) return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    return currentValue
        ? currentValue.trim().split(/\s+/).includes(value)
        : false;
}

export function isEmpty(root, dataName) {
    if (
        !validate.domElement(root, 'dom.isEmpty') ||
        !validate.dataName(dataName, 'dom.isEmpty')
    )
        return false;
    let value = root.getAttribute(`data-${dataName}`);
    return value === null || value.trim() === '';
}

export function closestDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.closestDataAttr') ||
        !validate.dataName(dataName, 'dom.closestDataAttr') ||
        !validate.dataAttrValue(value, 'dom.closestDataAttr')
    )
        return null;
    return root.closest(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function matchesDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.matchesDataAttr') ||
        !validate.dataName(dataName, 'dom.matchesDataAttr') ||
        !validate.dataAttrValue(value, 'dom.matchesDataAttr')
    )
        return false;
    return root.matches(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function toggleDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'dom.toggleDataAttr') ||
        !validate.dataName(dataName, 'dom.toggleDataAttr') ||
        !validate.dataAttrValue(value, 'dom.toggleDataAttr')
    )
        return false;
    const currentValue = root.getAttribute(`data-${dataName}`);
    if (currentValue === value || (value === '' && currentValue !== null)) {
        root.removeAttribute(`data-${dataName}`);
        return false;
    }
    root.setAttribute(`data-${dataName}`, value);
    return true;
}

export function toggleDataAttrValue(
    root,
    dataName,
    value1 = null,
    value2 = null
) {
    if (
        !validate.domElement(root, 'dom.toggleDataAttrValue') ||
        !validate.dataName(dataName, 'dom.toggleDataAttrValue') ||
        !validate.dataAttrValue(value1, 'dom.toggleDataAttrValue') ||
        !validate.dataAttrValue(value2, 'dom.toggleDataAttrValue')
    )
        return false;
    const currentValue = root.getAttribute(`data-${dataName}`);
    const newValue = currentValue === value1 ? value2 : value1;
    root.setAttribute(`data-${dataName}`, newValue);
    return newValue;
}

export function observe(root, dataName, callback, config = {attributes: true}) {
    if (
        !validate.domElement(root, 'dom.observe') ||
        !validate.dataName(dataName, 'dom.observe')
    )
        return false;
    if (typeof callback !== 'function') {
        console.error('[RAMS] dom.observe: Callback must be a function.');
        return false;
    }

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.attributeName === `data-${dataName}`) {
                callback(root, root.getAttribute(`data-${dataName}`));
            }
        }
    });

    observer.observe(root, config);
    return observer;
}

export function disconnectObserver(observer) {
    if (!(observer instanceof MutationObserver)) {
        console.error(
            '[RAMS] dom.disconnectObserver: Provided observer is not a valid MutationObserver.'
        );
        return false;
    }
    observer.disconnect();
    return true;
}

export function debouncedObserver(
    root,
    dataName,
    callback,
    delay = 300,
    config = {attributes: true}
) {
    if (
        !validate.domElement(root, 'dom.debouncedObserver') ||
        !validate.dataName(dataName, 'dom.debouncedObserver')
    )
        return false;
    if (typeof callback !== 'function') {
        console.error(
            '[RAMS] dom.debouncedObserver: Callback must be a function.'
        );
        return false;
    }
    if (typeof delay !== 'number' || delay < 0) {
        console.error(
            '[RAMS] dom.debouncedObserver: Delay must be a non-negative number.'
        );
        return false;
    }

    let timeout;
    const observer = new MutationObserver((mutations) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            for (const mutation of mutations) {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(root, root.getAttribute(`data-${dataName}`));
                }
            }
        }, delay);
    });

    observer.observe(root, config);
    return observer;
}
