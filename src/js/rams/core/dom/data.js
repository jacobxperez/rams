import {validate} from '../utilities/validate.js';

/**
 * Generates a CSS selector for a data attribute with an optional value.
 *
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} value - The value of the data attribute (optional).
 * @returns {string} The CSS selector string.
 */
function optionalDataAttrValue(dataName, value) {
    return value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`;
}

/**
 * Retrieves the first element with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to search within.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {HTMLElement|null} The first matching element, or null if not found.
 */
export function getFirstWithDataAttr(root, dataName, value = null) {
    const methodName = 'getFirstWithDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        return root.querySelector(optionalDataAttrValue(dataName, value));
    }
    return null;
}

/**
 * Retrieves all elements with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to search within.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {HTMLElement[]} An array of matching elements.
 */
export function getAllWithDataAttr(root, dataName, value = null) {
    const methodName = 'getAllWithDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        return Array.from(
            root.querySelectorAll(optionalDataAttrValue(dataName, value))
        );
    }
    return [];
}

/**
 * Sets a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} [value=''] - The value to set for the data attribute.
 * @returns {boolean} True if the attribute was set successfully, false otherwise.
 */
export function setDataAttr(root, dataName, value = '') {
    const methodName = 'setDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        root.setAttribute(`data-${dataName}`, value);
        return true;
    }
    return false;
}

/**
 * Appends a value to a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} value - The value to append to the data attribute.
 * @returns {boolean} True if the value was appended successfully, false otherwise.
 */
export function appendDataAttrValue(root, dataName, value) {
    const methodName = 'appendDataAttrValue';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        validate.isString(value, methodName)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`);
        const values = currentValue
            ? new Set(currentValue.trim().split(/\s+/))
            : new Set();

        if (values.has(value)) {
            throw new Error(
                `${methodName}: Value "${value}" already exists in "data-${dataName}".`
            );
        }

        values.add(value);
        root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
        return true;
    }
    throw new Error(`${methodName}: Invalid arguments provided.`);
}

/**
 * Removes a data attribute from an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @returns {boolean} True if the attribute was removed successfully, false otherwise.
 */
export function removeDataAttr(root, dataName) {
    const methodName = 'removeDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName)
    ) {
        if (!root.hasAttribute(`data-${dataName}`)) {
            // Return false instead of throwing an error if the attribute does not exist.
            return false;
        }

        root.removeAttribute(`data-${dataName}`);
        return true;
    }
    return false; // Return false for invalid arguments instead of throwing an error.
}

/**
 * Removes a specific value from a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} value - The value to remove from the data attribute.
 * @returns {boolean} True if the value was removed successfully, false otherwise.
 */
export function removeDataAttrValue(root, dataName, value) {
    const methodName = 'removeDataAttrValue';
    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        validate.isString(value, methodName)
    ) {
        let currentValue = root.getAttribute(`data-${dataName}`);

        if (!currentValue) {
            throw new Error(
                `${methodName}: Attribute "data-${dataName}" does not exist.`
            );
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
    throw new Error(`${methodName}: Invalid arguments provided.`);
}

/**
 * Replaces a specific value in a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} oldValue - The value to be replaced.
 * @param {string} newValue - The new value to set.
 * @returns {boolean} True if the value was replaced successfully, false otherwise.
 */
export function replaceDataAttrValue(root, dataName, oldValue, newValue) {
    const methodName = 'replaceDataAttrValue';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        validate.isString(oldValue, methodName) &&
        validate.isString(newValue, methodName)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`);
        if (!currentValue) {
            throw new Error(
                `${methodName}: Attribute "data-${dataName}" does not exist.`
            );
        }

        const values = currentValue.trim().split(/\s+/);
        const index = values.indexOf(oldValue);

        if (index === -1) {
            throw new Error(
                `${methodName}: Value "${oldValue}" not found in "data-${dataName}".`
            );
        }

        values[index] = newValue;
        root.setAttribute(`data-${dataName}`, values.join(' '));
        return true;
    }
    throw new Error(`${methodName}: Invalid arguments provided.`);
}

/**
 * Checks if an element has a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {boolean} True if the element has the data attribute and value, false otherwise.
 */
export function hasDataAttr(root, dataName, value = null) {
    const methodName = 'hasDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName)
    ) {
        if (!root.hasAttribute(`data-${dataName}`)) return false;

        if (value === null) return true;

        if (!(validate.isString(value, methodName) || value === null))
            return false;

        const currentValue = root.getAttribute(`data-${dataName}`);
        return currentValue
            ? currentValue.trim().split(/\s+/).includes(value)
            : false;
    }
    return false;
}

/**
 * Checks if a data attribute on an element is empty.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check.
 * @param {string} dataName - The name of the data attribute.
 * @returns {boolean} True if the data attribute is empty, false otherwise.
 */
export function dataAttrIsEmpty(root, dataName) {
    const methodName = 'dataAttrIsEmpty';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName)
    ) {
        let dataAttr = root.getAttribute(`data-${dataName}`);
        return dataAttr === null || dataAttr.trim() === '';
    }
    return false;
}

/**
 * Finds the closest ancestor element with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to start the search from.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {HTMLElement|null} The closest matching ancestor element, or null if not found.
 */
export function closestDataAttr(root, dataName, value = null) {
    const methodName = 'closestDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        return root.closest(optionalDataAttrValue(dataName, value));
    }
    return null;
}

/**
 * Checks if an element matches a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {boolean} True if the element matches the data attribute and value, false otherwise.
 */
export function matchesDataAttr(root, dataName, value = null) {
    const methodName = 'matchesDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        return root.matches(optionalDataAttrValue(dataName, value));
    }
    return false;
}

/**
 * Toggles a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {boolean} True if the attribute was added, false if it was removed.
 */
export function toggleDataAttr(root, dataName, value = null) {
    const methodName = 'toggleDataAttr';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        (validate.isString(value, methodName) || value === null)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`);
        if (currentValue === value || (value === '' && currentValue !== null)) {
            root.removeAttribute(`data-${dataName}`);
            return false;
        }
        root.setAttribute(`data-${dataName}`, value);
        return true;
    }
    return false;
}

/**
 * Toggles between two values for a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} value1 - The first value to toggle.
 * @param {string} value2 - The second value to toggle.
 * @returns {string|boolean} The new value of the data attribute, or false if the operation failed.
 */
export function toggleDataAttrValue(root, dataName, value1, value2) {
    const methodName = 'toggleDataAttrValue';

    if (
        validate.isDomElement(root, methodName) &&
        validate.isString(dataName, methodName) &&
        validate.isString(value1, methodName) &&
        validate.isString(value2, methodName)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        root.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    }
    return false;
}
