/**
 * Validates if the provided callback is a function.
 * @param {Function} callback - The callback to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isFunction(callback) {
    return typeof callback === 'function';
}

/**
 * Validates if the provided input is an object.
 * @param {Object} obj - The object to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

/**
 * Validates if the provided input is an array.
 * @param {Array} array - The array to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isArray(array) {
    return Array.isArray(array);
}

/**
 * Validates if the provided root is a valid DOM element.
 * @param {Element|Document|DocumentFragment} root - The root element to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isDomElement(root) {
    return (
        root &&
        (root instanceof Element ||
            root instanceof Document ||
            root instanceof DocumentFragment)
    );
}

/**
 * Validates if the provided string is a non-empty string.
 * @param {string} string - The string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isString(string) {
    return typeof string === 'string' && string.trim() !== '';
}

/**
 * Validates if the provided input is an iterable.
 * @param {*} input - The input to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isIterable(input) {
    return input != null && typeof input[Symbol.iterator] === 'function';
}

/**
 * Validates if the provided value is a number.
 * @param {number} value - The value to validate.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.allowNaN=false] - Whether to allow NaN as a valid number.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isNumber(value, {allowNaN = false} = {}) {
    return typeof value === 'number' && (allowNaN || !isNaN(value));
}

/**
 * Validates if the provided value is a boolean.
 * @param {*} val - The value to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const isBoolean = (val) => typeof val === 'boolean';

/**
 * Validates if the provided value is a valid Date object.
 * @param {*} val - The value to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export function isDate(val) {
    return val instanceof Date && !isNaN(val.getTime());
}

/**
 * Creates a validator that allows null or undefined values.
 * @param {Function} validator - The base validator function.
 * @returns {Function} - A new validator function.
 */
export const isNullable = (validator) => (value) =>
    value == null || validator(value);

/**
 * Creates a validator that allows undefined values.
 * @param {Function} validator - The base validator function.
 * @returns {Function} - A new validator function.
 */
export const isOptional = (validator) => (value) =>
    value === undefined || validator(value);

/**
 * Creates a validator that checks if a value is one of the provided options.
 * @param {...*} options - The valid options.
 * @returns {Function} - A new validator function.
 */
export const isOneOf =
    (...options) =>
    (value) =>
        options.includes(value);

/**
 * Creates a validator that checks if a value is an instance of a specific constructor.
 * @param {Function} constructor - The constructor to check against.
 * @returns {Function} - A new validator function.
 */
export const isInstanceOf = (constructor) => (value) =>
    value instanceof constructor;

/**
 * Validates a value against multiple validators.
 * @param {Function[]} validators - An array of validator functions.
 * @param {*} value - The value to validate.
 * @param {Function} [callback] - A callback to execute if all validators pass.
 * @returns {boolean} - True if all validators pass, false otherwise.
 * @throws {Error} - If any validator is not a function.
 */
export const validateMulti = (validators, value, callback) => {
    if (
        !Array.isArray(validators) ||
        !validators.every((fn) => typeof fn === 'function')
    ) {
        throw new Error('All validators must be functions.');
    }
    const allValid = validators.every((fn) => fn(value));
    if (allValid && typeof callback === 'function') {
        callback(value);
        return true;
    }
    return false;
};

/**
 * Asynchronously validates a value against multiple validators.
 * @param {Function[]} validators - An array of async validator functions.
 * @param {*} value - The value to validate.
 * @param {Function} [callback] - A callback to execute if all validators pass.
 * @returns {Promise<boolean>} - Resolves to true if all validators pass, false otherwise.
 * @throws {Error} - If any validator is not a function.
 */
export const validateMultiAsync = async (validators, value, callback) => {
    if (
        !Array.isArray(validators) ||
        !validators.every((fn) => typeof fn === 'function')
    ) {
        throw new Error('All validators must be functions.');
    }
    const results = await Promise.all(validators.map((fn) => fn(value)));
    const allValid = results.every(Boolean);
    if (allValid && typeof callback === 'function') {
        await callback(value);
        return true;
    }
    return false;
};
