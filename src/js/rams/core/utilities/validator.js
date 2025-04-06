export const validate = {
    /**
     * Logs an error message with a consistent format.
     * @param {string} methodName - The name of the method where the error occurred.
     * @param {string} message - The error message to log.
     */
    logError(methodName, message) {
        console.error(`[RAMS] ${methodName}: ${message}`);
    },

    logWarn(methodName, message) {
        console.warn(`[RAMS] ${methodName}: ${message}`);
    },

    /**
     * Validates if the provided root is a valid DOM element.
     * @param {Element|Document|DocumentFragment} root - The root element to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    domElement(root, methodName) {
        if (
            !(
                root instanceof Element ||
                root instanceof Document ||
                root instanceof DocumentFragment
            )
        ) {
            this.logError(
                methodName,
                'Provided element is not a valid DOM Element.'
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
    dataName(dataName, methodName) {
        if (typeof dataName !== 'string' || dataName.trim() === '') {
            this.logError(methodName, 'dataName must be a non-empty string.');
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
                'dataValue must be a string if provided.'
            );
            return false;
        }
        return true;
    },
};
