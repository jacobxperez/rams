import {validate} from '../utilities/validator.js';

export function getFirstWithDataAttr(root, dataName, value = null) {
    const methodName = 'getFirstWithDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return null;
    return root.querySelector(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function getAllWithDataAttr(root, dataName, value = null) {
    const methodName = 'getAllWithDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return [];
    return Array.from(
        root.querySelectorAll(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        )
    );
}

export function setDataAttr(root, dataName, value = null) {
    const methodName = 'setDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return false;
    root.setAttribute(`data-${dataName}`, value);
    return true;
}

export function appendDataAttrValue(root, dataName, value) {
    const methodName = 'appendDataAttrValue';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    const values = new Set(
        currentValue ? currentValue.trim().split(/\s+/) : []
    );

    if (values.has(value)) {
        validate.logWarn(
            methodName,
            `Value "${value}" already exists in "data-${dataName}".`
        );
        return false;
    }

    values.add(value);
    root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
    return true;
}

export function removeDataAttr(root, dataName) {
    const methodName = 'removeDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName)
    )
        return false;
    root.removeAttribute(`data-${dataName}`);
    return true;
}

export function removeDataAttrValue(root, dataName, value) {
    const methodName = 'removeDataAttrValue';
    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return false;
    let currentValue = root.getAttribute(`data-${dataName}`);

    if (!currentValue) {
        validate.logWarn(
            methodName,
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
    const methodName = 'replaceDataAttrValue';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(oldValue, methodName) ||
        !validate.dataAttrValue(newValue, methodName)
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    if (!currentValue) {
        validate.logWarn(
            methodName,
            `Attribute "data-${dataName}" does not exist.`
        );
        return false;
    }

    const values = currentValue.trim().split(/\s+/);
    const index = values.indexOf(oldValue);

    if (index === -1) {
        validate.logWarn(
            methodName,
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
    const methodName = 'isEmpty';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName)
    )
        return false;
    let value = root.getAttribute(`data-${dataName}`);
    return value === null || value.trim() === '';
}

export function closestDataAttr(root, dataName, value = null) {
    const methodName = 'closestDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return null;
    return root.closest(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function matchesDataAttr(root, dataName, value = null) {
    const methodName = 'matchesDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
    )
        return false;
    return root.matches(
        value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
    );
}

export function toggleDataAttr(root, dataName, value = null) {
    const methodName = 'toggleDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value, methodName)
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
    const methodName = 'toggleDataAttrValue';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName) ||
        !validate.dataAttrValue(value1, methodName) ||
        !validate.dataAttrValue(value2, methodName)
    )
        return false;
    const currentValue = root.getAttribute(`data-${dataName}`);
    const newValue = currentValue === value1 ? value2 : value1;
    root.setAttribute(`data-${dataName}`, newValue);
    return newValue;
}

export function observe(root, dataName, callback, config = {attributes: true}) {
    const methodName = 'observe';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName)
    )
        return false;
    if (typeof callback !== 'function') {
        validate.logError(methodName, 'Callback must be a function.');
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
    const methodName = 'disconnectObserver';

    if (!(observer instanceof MutationObserver)) {
        validate.logError(
            methodName,
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
    const methodName = 'debouncedObserver';

    if (
        !validate.domElement(root, methodName) ||
        !validate.dataAttrName(dataName, methodName)
    )
        return false;
    if (typeof callback !== 'function') {
        validate.logError(methodName, 'Callback must be a function.');
        return false;
    }
    if (typeof delay !== 'number' || delay < 0) {
        validate.logError(methodName, 'Delay must be a non-negative number.');
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
