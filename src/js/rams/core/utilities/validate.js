export const validate = {
    /**
     * Validates if the provided callback is a function.
     * @param {Function} callback - The callback to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    function(callback) {
        if (typeof callback !== 'function') {
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided input is an object.
     * @param {Object} obj - The object to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided input is an array.
     * @param {Array} array - The array to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    array(array) {
        if (!Array.isArray(array)) {
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided root is a valid DOM element.
     * @param {Element|Document|DocumentFragment} root - The root element to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    domElement(root) {
        if (
            !root ||
            !(
                root instanceof Element ||
                root instanceof Document ||
                root instanceof DocumentFragment
            )
        ) {
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided string is a non-empty string.
     * @param {string} string - The string to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    string(string) {
        if (typeof string !== 'string' || string.trim() === '') {
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided input is an iterable.
     * @param {*} input - The input to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    iterable(input) {
        if (input != null && typeof input[Symbol.iterator] === 'function') {
            return true;
        }
        return false;
    },

    number(value, {allowNaN = false} = {}) {
        if (typeof value === 'number' && (allowNaN || !isNaN(value))) {
            return true;
        }
        return false;
    },

    boolean: (val) => typeof val === 'boolean',

    date(val) {
        if (val instanceof Date && !isNaN(val.getTime())) {
            return true;
        }
        return false;
    },

    nullable: (validator) => (value) => value == null || validator(value),

    optional: (validator) => (value) => value === undefined || validator(value),

    oneOf:
        (...options) =>
        (value) =>
            options.includes(value),

    instanceOf: (constructor) => (value) => value instanceof constructor,

    multi: (validators, value, callback) => {
        const allValid = validators.every((fn) => fn(value));
        if (allValid && typeof callback === 'function') {
            callback(value);
            return true;
        }
        return false;
    },

    multiAsync: async (validators, value, callback) => {
        const results = await Promise.all(validators.map((fn) => fn(value)));
        const allValid = results.every(Boolean);
        if (allValid && typeof callback === 'function') {
            await callback(value);
            return true;
        }
        return false;
    },
};
