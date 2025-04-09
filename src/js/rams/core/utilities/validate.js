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
    logMessage(methodName, message, level) {
        const logFunction = level === 'error' ? console.error : console.warn;
        const sanitizedMessage = message.replace(/\((.*?)\)/g, '(sanitized)');
        logFunction(`[${this.libraryName}] ${methodName}: ${sanitizedMessage}`);
    },

    /**
     * Logs an error message.
     * @param {string} methodName - The name of the method where the error occurred.
     * @param {string} message - The error message to log.
     */
    logError(methodName, message) {
        return this.logMessage(methodName, message, 'error');
    },

    /**
     * Logs a warning message.
     * @param {string} methodName - The name of the method where the warning occurred.
     * @param {string} message - The warning message to log.
     */
    logWarn(methodName, message) {
        this.logMessage(methodName, message, 'warn');
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
            this.logError(
                methodName,
                `Invalid input: Expected a DOM Element, Document, or DocumentFragment, but received ${typeof root} (${root}).`
            );
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided dataName is a non-empty string.
     * @param {string} dataName - The data attribute name to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    dataAttrName(dataName, methodName) {
        if (typeof dataName !== 'string' || dataName.trim() === '') {
            this.logError(
                methodName,
                `Invalid input: dataName must be a non-empty string, but received ${typeof dataName} (${dataName}).`
            );
            return false;
        }
        return true;
    },

    /**
     * Validates if the provided dataValue is a string or null.
     * @param {string|null} dataValue - The data attribute value to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    dataAttrValue(dataValue, methodName) {
        if (dataValue !== null && typeof dataValue !== 'string') {
            this.logError(
                methodName,
                `Invalid input: dataValue must be a string or null, but received ${typeof dataValue} (${dataValue}).`
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
            this.logError(
                methodName,
                `Invalid input: callback must be a function, but received ${typeof callback} (${callback}).`
            );
            return false;
        }
        return true;
    },
};
