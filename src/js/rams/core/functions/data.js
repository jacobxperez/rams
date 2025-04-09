import {validate} from '../utilities/validate.js';

function optionalDataAttrValue(dataName, value) {
    return value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`;
}

export function getFirstWithDataAttr(root, dataName, value = null) {
    const methodName = 'getFirstWithDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
    )
        return null;
    return root.querySelector(optionalDataAttrValue(dataName, value));
}

export function getAllWithDataAttr(root, dataName, value = null) {
    const methodName = 'getAllWithDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
    )
        return [];
    return Array.from(
        root.querySelectorAll(optionalDataAttrValue(dataName, value))
    );
}

export function setDataAttr(root, dataName, value = null) {
    const methodName = 'setDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
    )
        return false;
    root.setAttribute(`data-${dataName}`, value);
    return true;
}

export function appendDataAttrValue(root, dataName, value) {
    const methodName = 'appendDataAttrValue';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !validate.isString(value, methodName)
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    const values = new Set(
        currentValue ? currentValue.trim().split(/\s+/) : []
    );

    if (values.has(value)) {
        console.warn(
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
        !validate.isString(dataName, methodName)
    )
        return false;
    root.removeAttribute(`data-${dataName}`);
    return true;
}

export function removeDataAttrValue(root, dataName, value) {
    const methodName = 'removeDataAttrValue';
    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !validate.isString(value, methodName)
    )
        return false;
    let currentValue = root.getAttribute(`data-${dataName}`);

    if (!currentValue) {
        console.warn(
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
        !validate.isString(dataName, methodName) ||
        !validate.isString(oldValue, methodName) ||
        !validate.isString(newValue, methodName)
    )
        return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    if (!currentValue) {
        console.warn(
            methodName,
            `Attribute "data-${dataName}" does not exist.`
        );
        return false;
    }

    const values = currentValue.trim().split(/\s+/);
    const index = values.indexOf(oldValue);

    if (index === -1) {
        console.warn(
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
        !validate.isString(dataName, methodName)
    )
        return false;

    if (!root.hasAttribute(`data-${dataName}`)) return false;

    if (value === null) return true;

    if (!(validate.isString(value, methodName) || value === null)) return false;

    const currentValue = root.getAttribute(`data-${dataName}`);
    return currentValue
        ? currentValue.trim().split(/\s+/).includes(value)
        : false;
}

export function dataAttrIsEmpty(root, dataName) {
    const methodName = 'isEmpty';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName)
    )
        return false;
    let value = root.getAttribute(`data-${dataName}`);
    return value === null || value.trim() === '';
}

export function closestDataAttr(root, dataName, value = null) {
    const methodName = 'closestDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
    )
        return null;
    return root.closest(optionalDataAttrValue(dataName, value));
}

export function matchesDataAttr(root, dataName, value = null) {
    const methodName = 'matchesDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
    )
        return false;
    return root.matches(optionalDataAttrValue(dataName, value));
}

export function toggleDataAttr(root, dataName, value = null) {
    const methodName = 'toggleDataAttr';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !(validate.isString(value, methodName) || value === null)
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

export function toggleDataAttrValue(root, dataName, value1, value2) {
    const methodName = 'toggleDataAttrValue';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName) ||
        !validate.isString(value1, methodName) ||
        !validate.isString(value2, methodName)
    )
        return false;
    const currentValue = root.getAttribute(`data-${dataName}`);
    const newValue = currentValue === value1 ? value2 : value1;
    root.setAttribute(`data-${dataName}`, newValue);
    return newValue;
}
