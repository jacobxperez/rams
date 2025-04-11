export const validate = {
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
     * Validates if the provided input is an iterable.
     * @param {*} input - The input to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    iterable(input) {
        return input != null && typeof input[Symbol.iterator] === 'function';
    },
};
