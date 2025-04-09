export const validate = {
    /**
     * @namespace validate
     * @description A utility module for validating inputs.
     * @property {string} libraryName - The name of the library.
     */
    libraryName: 'RAMS',

    /**
     * Logs a message with a consistent format and log level.
     * @param {string} methodName - The name of the method where the log occurred.
     * @param {string} message - The message to log.
     * @param {string} level - The log level ('error' or 'warn').
     */
    logMessage(methodName, message) {
        console.error(
            `[${this.libraryName}] Invalid input: ${methodName} ${message}`
        );
    },

    /**
     * Validates if the provided root is a valid DOM element.
     * @param {Element|Document|DocumentFragment} root - The root element to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    domElement(root, methodName) {
        if (
            !root ||
            !(
                root instanceof Element ||
                root instanceof Document ||
                root instanceof DocumentFragment
            )
        ) {
            this.logMessage(
                methodName,
                `Expected a DOM Element, Document, or DocumentFragment, but received ${typeof root} (${root}).`
            );
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided string is a non-empty string.
     * @param {string} string - The string to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isString(string, methodName) {
        if (typeof string !== 'string' || string.trim() === '') {
            this.logMessage(
                methodName,
                `Must be a non-empty string, but received ${typeof string} (${string}).`
            );

            return false;
        }
        return true;
    },

    /**
     * Validates if the provided callback is a function.
     * @param {Function} callback - The callback to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isFunction(callback, methodName) {
        if (typeof callback !== 'function') {
            this.logMessage(
                methodName,
                `Must be a function, but received ${typeof callback} (${callback}).`
            );
            return false;
        }
        return true;
    },
};
