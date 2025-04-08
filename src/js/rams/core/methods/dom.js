import {validate} from '../utilities/validator.js';

export function getFirstWithDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'getDataAttr') ||
        !validate.dataAttrName(dataName, 'getDataAttr') ||
        !validate.dataAttrValue(value, 'getDataAttr')
    )
        return null;
    return root.querySelector(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function getAllWithDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'getAllDataAttr') ||
        !validate.dataAttrName(dataName, 'getAllDataAttr') ||
        !validate.dataAttrValue(value, 'getAllDataAttr')
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
        !validate.domElement(root, 'setDataAttr') ||
        !validate.dataAttrName(dataName, 'setDataAttr') ||
        !validate.dataAttrValue(value, 'setDataAttr')
    )
        return false;
    root.setAttribute(`data-${dataName}`, value);
    return true;
}

export function appendDataAttrValue(root, dataName, value) {
    if (
        !validate.domElement(root, 'appendDataAttrValue') ||
        !validate.dataAttrName(dataName, 'appendDataAttrValue') ||
        !validate.dataAttrValue(value, 'appendDataAttrValue')
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    const values = new Set(
        currentValue ? currentValue.trim().split(/\s+/) : []
    );

    if (values.has(value)) {
        validate.logWarn(
            'appendDataAttrValue',
            `Value "${value}" already exists in "data-${dataName}".`
        );
        return false;
    }

    values.add(value);
    root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
    return true;
}

export function removeDataAttr(root, dataName) {
    if (
        !validate.domElement(root, 'removeDataAttr') ||
        !validate.dataAttrName(dataName, 'removeDataAttr')
    )
        return false;
    root.removeAttribute(`data-${dataName}`);
    return true;
}

export function removeDataAttrValue(root, dataName, value) {
    if (
        !validate.domElement(root, 'removeDataAttrValue') ||
        !validate.dataAttrName(dataName, 'removeDataAttrValue') ||
        !validate.dataAttrValue(value, 'removeDataAttrValue')
    )
        return false;
    let currentValue = root.getAttribute(`data-${dataName}`);

    if (!currentValue) {
        validate.logWarn(
            'dom.removeDataAttrValue',
            `Attribute "data-${dataName}" does not exist.`
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
        !validate.domElement(root, 'replaceDataAttrValue') ||
        !validate.dataAttrName(dataName, 'replaceDataAttrValue') ||
        !validate.dataAttrValue(oldValue, 'replaceDataAttrValue') ||
        !validate.dataAttrValue(newValue, 'replaceDataAttrValue')
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    if (!currentValue) {
        validate.logWarn(
            'replaceDataAttrValue',
            `Attribute "data-${dataName}" does not exist.`
        );
        return false;
    }

    const values = currentValue.trim().split(/\s+/);
    const index = values.indexOf(oldValue);

    if (index === -1) {
        validate.logWarn(
            'replaceDataAttrValue',
            `Value "${oldValue}" not found in "data-${dataName}".`
        );
        return false;
    }

    values[index] = newValue;
    root.setAttribute(`data-${dataName}`, values.join(' '));
    return true;
}

export function hasDataAttr(root, dataName, value = null) {
    const methodName = 'hasDataAttr';
    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName)
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
        !validate.domElement(root, 'isEmpty') ||
        !validate.dataAttrName(dataName, 'isEmpty')
    )
        return false;
    let value = root.getAttribute(`data-${dataName}`);
    return value === null || value.trim() === '';
}

export function closestDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'closestDataAttr') ||
        !validate.dataAttrName(dataName, 'closestDataAttr') ||
        !validate.dataAttrValue(value, 'closestDataAttr')
    )
        return null;
    return root.closest(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function matchesDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'matchesDataAttr') ||
        !validate.dataAttrName(dataName, 'matchesDataAttr') ||
        !validate.dataAttrValue(value, 'matchesDataAttr')
    )
        return false;
    return root.matches(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function toggleDataAttr(root, dataName, value = null) {
    if (
        !validate.domElement(root, 'domtoggleDataAttr') ||
        !validate.dataAttrName(dataName, 'domtoggleDataAttr') ||
        !validate.dataAttrValue(value, 'domtoggleDataAttr')
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
        !validate.domElement(root, 'toggleDataAttrValue') ||
        !validate.dataAttrName(dataName, 'toggleDataAttrValue') ||
        !validate.dataAttrValue(value1, 'toggleDataAttrValue') ||
        !validate.dataAttrValue(value2, 'toggleDataAttrValue')
    )
        return false;
    const currentValue = root.getAttribute(`data-${dataName}`);
    const newValue = currentValue === value1 ? value2 : value1;
    root.setAttribute(`data-${dataName}`, newValue);
    return newValue;
}

export function observe(root, dataName, callback, config = {attributes: true}) {
    if (
        !validate.domElement(root, 'observe') ||
        !validate.dataAttrName(dataName, 'observe')
    )
        return false;
    if (typeof callback !== 'function') {
        validate.logError('observe', 'Callback must be a function.');
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
        validate.logError(
            'disconnectObserver',
            'Provided observer is not a valid MutationObserver.'
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
        !validate.domElement(root, 'debouncedObserver') ||
        !validate.dataAttrName(dataName, 'debouncedObserver')
    )
        return false;
    if (typeof callback !== 'function') {
        validate.logError('debouncedObserver', 'Callback must be a function.');
        return false;
    }
    if (typeof delay !== 'number' || delay < 0) {
        validate.logError(
            'debouncedObserver',
            'Delay must be a non-negative number.'
        );
        return false;
    }

    let timeout;
    const observer = new MutationObserver((mutations) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(root, root.getAttribute(`data-${dataName}`));
                }
            });
        }, delay);
    });

    observer.observe(root, config);
    return observer;
}
