export const validate = {
    /**
     * Validates if the provided callback is a function.
     * @param {Function} callback - The callback to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isFunction(callback) {
        return typeof callback === 'function';
    },

    /**
     * Validates if the provided input is an object.
     * @param {Object} obj - The object to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isObject(obj) {
        return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    },

    /**
     * Validates if the provided input is an array.
     * @param {Array} array - The array to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isArray(array) {
        return Array.isArray(array);
    },

    /**
     * Validates if the provided root is a valid DOM element.
     * @param {Element|Document|DocumentFragment} root - The root element to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isDomElement(root) {
        return (
            root &&
            (root instanceof Element ||
                root instanceof Document ||
                root instanceof DocumentFragment)
        );
    },

    /**
     * Validates if the provided string is a non-empty string.
     * @param {string} string - The string to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isString(string) {
        return typeof string === 'string' && string.trim() !== '';
    },

    /**
     * Validates if the provided input is an iterable.
     * @param {*} input - The input to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isIterable(input) {
        return input != null && typeof input[Symbol.iterator] === 'function';
    },

    isNumber(value, {allowNaN = false} = {}) {
        return typeof value === 'number' && (allowNaN || !isNaN(value));
    },

    isBoolean: (val) => typeof val === 'boolean',

    isDate(val) {
        return val instanceof Date && !isNaN(val.getTime());
    },

    isNullable: (validator) => (value) => value == null || validator(value),

    isOptional: (validator) => (value) =>
        value === undefined || validator(value),

    isOneOf:
        (...options) =>
        (value) =>
            options.includes(value),

    isInstanceOf: (constructor) => (value) => value instanceof constructor,

    validateMulti: (validators, value, callback) => {
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
    },

    validateMultiAsync: async (validators, value, callback) => {
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
    },
};
