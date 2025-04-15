import {isString, isDomElement, isOptional} from '../validators/valid.js';

const isValidElementWithDataAttr = (root, dataName) =>
    isDomElement(root) && isString(dataName);
const isValidDataAttrValue = (value) => isOptional(value) || isString(value);

/**
 * Generates a CSS selector for a data attribute with an optional value.
 *
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string|null} value - The value of the data attribute (optional). If null, matches any value.
 * @returns {string} The CSS selector string for the specified data attribute and value.
 */
function optionalDataAttrValue(dataName, value) {
    return value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`;
}

/**
 * Retrieves the first element with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to search within. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string|null} [value=null] - The value of the data attribute (optional). If null, matches any value.
 * @returns {HTMLElement|null} The first matching element, or null if no match is found.
 */
export const getFirstWithDataAttr = (root) => (dataName, value) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        return root.querySelector(optionalDataAttrValue(dataName, value));
    }
    return null;
};

/**
 * Retrieves all elements with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to search within. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string|null} [value=null] - The value of the data attribute (optional). If null, matches any value.
 * @returns {HTMLElement[]} An array of matching elements, or an empty array if no matches are found.
 */
export const getAllWithDataAttr = (root) => (dataName, value) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        return [
            ...root.querySelectorAll(optionalDataAttrValue(dataName, value)),
        ];
    }
    return [];
};

/**
 * Sets a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string} [value=''] - The value to set for the data attribute. Defaults to an empty string.
 * @returns {boolean} True if the attribute was set successfully, false otherwise.
 */
export const setDataAttr =
    (root) =>
    (dataName, value = '') => {
        if (
            isValidElementWithDataAttr(root, dataName) &&
            isValidDataAttrValue(value)
        ) {
            root.setAttribute(`data-${dataName}`, value);
            return true;
        }
        return false;
    };

/**
 * Appends a value to a data attribute on an element.
 *
 * @param {Element} root - The element to modify. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string} value - The value to append to the data attribute. Must be a valid string.
 * @returns {boolean} True if the value was appended successfully, false otherwise.
 * @throws {Error} If the value already exists in the data attribute or if invalid arguments are provided.
 */
export const appendDataAttrValue = (root) => (dataName, value) => {
    const methodName = 'appendDataAttrValue';
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`) || '';
        const values = new Set(currentValue.split(/\s+/).filter(Boolean));

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
};

/**
 * Removes a data attribute from an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @returns {boolean} True if the attribute was removed successfully, false otherwise.
 */
export const removeDataAttr = (root) => (dataName) => {
    if (isValidElementWithDataAttr(root, dataName)) {
        if (!root.hasAttribute(`data-${dataName}`)) {
            // Return false instead of throwing an error if the attribute does not exist.
            return false;
        }

        root.removeAttribute(`data-${dataName}`);
        return true;
    }
    return false; // Return false for invalid arguments instead of throwing an error.
};

/**
 * Removes a specific value from a data attribute on an element.
 *
 * @param {Element} root - The element to modify. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string} value - The value to remove from the data attribute. Must be a valid string.
 * @returns {boolean} True if the value was removed successfully, false otherwise.
 * @throws {Error} If the value does not exist in the data attribute or if invalid arguments are provided.
 */
export const removeDataAttrValue = (root) => (dataName, value) => {
    const methodName = 'removeDataAttrValue';

    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`) || '';
        const values = new Set(currentValue.split(/\s+/).filter(Boolean));

        if (!values.has(value)) {
            throw new Error(
                `${methodName}: Value "${value}" not found in "data-${dataName}".`
            );
        }

        values.delete(value);
        if (values.size > 0) {
            root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
        } else {
            root.removeAttribute(`data-${dataName}`);
        }

        return true;
    }
    throw new Error(`${methodName}: Invalid arguments provided.`);
};

/**
 * Replaces a specific value in a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string} oldValue - The value to be replaced. Must be a valid string.
 * @param {string} newValue - The new value to set. Must be a valid string.
 * @returns {boolean} True if the value was replaced successfully, false otherwise.
 * @throws {Error} If the old value is not found in the data attribute or if invalid arguments are provided.
 */
export const replaceDataAttrValue =
    (root) => (dataName, oldValue) => (newValue) => {
        const methodName = 'replaceDataAttrValue';

        if (
            isValidElementWithDataAttr(root, dataName) &&
            isString(oldValue) &&
            isString(newValue)
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
    };

/**
 * Checks if an element has a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string|null} [value=null] - The value of the data attribute (optional). If null, checks for the presence of the attribute regardless of its value.
 * @returns {boolean} True if the element has the data attribute and value, false otherwise.
 */
export const hasDataAttr = (root) => (dataName, value) => {
    if (isValidElementWithDataAttr(root, dataName)) {
        if (!root.hasAttribute(`data-${dataName}`)) return false;

        if (value === null) return true;

        if (!(isString(value) || value === null)) return false;

        const currentValue = root.getAttribute(`data-${dataName}`);
        return currentValue
            ? currentValue.trim().split(/\s+/).includes(value)
            : false;
    }
    return false;
};

/**
 * Checks if a data attribute on an element is empty.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @returns {boolean} True if the data attribute is empty or does not exist, false otherwise.
 */
export const dataAttrIsEmpty = (root) => (dataName) => {
    if (isValidElementWithDataAttr(root, dataName)) {
        let dataAttr = root.getAttribute(`data-${dataName}`);
        return dataAttr === null || dataAttr.trim() === '';
    }
    return false;
};

/**
 * Finds the closest ancestor element with a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to start the search from. Must be a valid DOM element.
 * @param {string} dataName - The name of the data attribute. Must be a valid string.
 * @param {string|null} [value=null] - The value of the data attribute (optional). If null, matches any value.
 * @returns {HTMLElement|null} The closest matching ancestor element, or null if not found.
 */
export const closestDataAttr = (root) => (dataName, value) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        return root.closest(optionalDataAttrValue(dataName, value));
    }
    return null;
};

/**
 * Checks if an element matches a specific data attribute and optional value.
 *
 * @param {Element|Document|DocumentFragment} root - The element to check.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {boolean} True if the element matches the data attribute and value, false otherwise.
 */
export const matchesDataAttr = (root) => (dataName, value) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
    ) {
        return root.matches(optionalDataAttrValue(dataName, value));
    }
    return false;
};

/**
 * Toggles a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string|null} [value=null] - The value of the data attribute (optional).
 * @returns {boolean} True if the attribute was added, false if it was removed.
 */
export const toggleDataAttr = (root) => (dataName, value) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isValidDataAttrValue(value)
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
};

/**
 * Toggles between two values for a data attribute on an element.
 *
 * @param {Element|Document|DocumentFragment} root - The element to modify.
 * @param {string} dataName - The name of the data attribute.
 * @param {string} value1 - The first value to toggle.
 * @param {string} value2 - The second value to toggle.
 * @returns {string|boolean} The new value of the data attribute, or false if the operation failed.
 */
export const toggleDataAttrValue = (root) => (dataName, value1) => (value2) => {
    if (
        isValidElementWithDataAttr(root, dataName) &&
        isString(value1) &&
        isString(value2)
    ) {
        const currentValue = root.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        root.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    }
    return false;
};
