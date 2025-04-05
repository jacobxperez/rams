export const dom = {
    /**
     * Validates if the provided root is a valid DOM element.
     * @param {Element|Document|DocumentFragment} root - The root element to validate.
     * @param {string} methodName - The name of the method calling this validation.
     * @returns {boolean} - True if valid, false otherwise.
     */
    validateRoot(root, methodName) {
        if (
            !(
                root instanceof Element ||
                root instanceof Document ||
                root instanceof DocumentFragment
            )
        ) {
            console.error(
                `[RAMS] ${methodName}: Provided element is not a valid DOM Element.`
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
    validateDataName(dataName, methodName) {
        if (typeof dataName !== 'string' || dataName.trim() === '') {
            console.error(
                `[RAMS] ${methodName}: dataName must be a non-empty string.`
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
    validateDataValue(dataValue, methodName) {
        if (dataValue !== null && typeof dataValue !== 'string') {
            console.error(
                `[RAMS] ${methodName}: dataValue must be a string if provided.`
            );
            return false;
        }
        return true;
    },

    /**
     * Retrieves the first element with the specified data attribute.
     * @param {Element|Document|DocumentFragment} root - The root element to search within.
     * @param {string} dataName - The data attribute name to search for.
     * @param {string|null} [value=null] - The optional value of the data attribute.
     * @returns {Element|null} - The matching element or null if not found.
     */
    getDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.getDataAttr') ||
            !this.validateDataName(dataName, 'dom.getDataAttr') ||
            !this.validateDataValue(value, 'dom.getDataAttr')
        )
            return null;
        return root.querySelector(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    /**
     * Retrieves all elements with the specified data attribute.
     * @param {Element|Document|DocumentFragment} root - The root element to search within.
     * @param {string} dataName - The data attribute name to search for.
     * @param {string|null} [value=null] - The optional value of the data attribute.
     * @returns {Element[]} - An array of matching elements.
     */
    getAllDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.getAllDataAttr') ||
            !this.validateDataName(dataName, 'dom.getAllDataAttr') ||
            !this.validateDataValue(value, 'dom.getAllDataAttr')
        )
            return [];
        return Array.from(
            root.querySelectorAll(
                value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
            )
        );
    },

    /**
     * Sets a data attribute on the specified element.
     * @param {Element} root - The element to set the data attribute on.
     * @param {string} dataName - The data attribute name to set.
     * @param {string|null} [value=null] - The value of the data attribute.
     * @returns {boolean} - True if successful, false otherwise.
     */
    setDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.setDataAttr') ||
            !this.validateDataName(dataName, 'dom.setDataAttr') ||
            !this.validateDataValue(value, 'dom.setDataAttr')
        )
            return false;
        root.setAttribute(`data-${dataName}`, value);
        return true;
    },

    /**
     * Appends a value to a space-separated data attribute.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name.
     * @param {string} value - The value to append.
     * @returns {boolean} - True if the value was added, false otherwise.
     */
    appendDataAttrValue(root, dataName, value) {
        if (
            !this.validateRoot(root, 'dom.appendDataAttrValue') ||
            !this.validateDataName(dataName, 'dom.appendDataAttrValue') ||
            !this.validateDataValue(value, 'dom.appendDataAttrValue')
        )
            return false;

        let currentValue = root.getAttribute(`data-${dataName}`);
        let values = new Set(
            currentValue ? currentValue.trim().split(/\s+/) : []
        );

        if (!values.has(value)) {
            values.add(value);
            root.setAttribute(`data-${dataName}`, Array.from(values).join(' '));
            return true;
        }

        return false;
    },

    /**
     * Removes a data attribute from the specified element.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name to remove.
     * @returns {boolean} - True if successful, false otherwise.
     */
    removeDataAttr(root, dataName) {
        if (
            !this.validateRoot(root, 'dom.removeDataAttr') ||
            !this.validateDataName(dataName, 'dom.removeDataAttr')
        )
            return false;
        root.removeAttribute(`data-${dataName}`);
        return true;
    },

    /**
     * Removes a specific value from a space-separated data attribute.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name.
     * @param {string} value - The value to remove.
     * @returns {boolean} - True if the value was removed, false otherwise.
     */
    removeDataAttrValue(root, dataName, value) {
        if (
            !this.validateRoot(root, 'dom.removeDataAttrValue') ||
            !this.validateDataName(dataName, 'dom.removeDataAttrValue') ||
            !this.validateDataValue(value, 'dom.removeDataAttrValue')
        )
            return false;
        let currentValue = root.getAttribute(`data-${dataName}`);

        if (!currentValue) {
            console.warn(
                `[RAMS] dom.removeDataAttrValue: Attribute "data-${dataName}" does not exist.`
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
    },

    /**
     * Replaces a specific value in a space-separated data attribute.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name.
     * @param {string} oldValue - The value to replace.
     * @param {string} newValue - The new value to set.
     * @returns {boolean} - True if the value was replaced, false otherwise.
     */
    replaceDataAttrValue(root, dataName, oldValue, newValue) {
        if (
            !this.validateRoot(root, 'dom.replaceDataAttrValue') ||
            !this.validateDataName(dataName, 'dom.replaceDataAttrValue') ||
            !this.validateDataValue(oldValue, 'dom.replaceDataAttrValue') ||
            !this.validateDataValue(newValue, 'dom.replaceDataAttrValue')
        )
            return false;

        let currentValue = root.getAttribute(`data-${dataName}`);
        if (!currentValue) return false;

        let values = currentValue.trim().split(/\s+/);
        let index = values.indexOf(oldValue);

        if (index === -1) return false;

        values[index] = newValue;

        root.setAttribute(`data-${dataName}`, values.join(' '));
        return true;
    },

    /**
     * Checks if a data attribute exists on the element, optionally with a specific value.
     * @param {Element} root - The element to check.
     * @param {string} dataName - The data attribute name.
     * @param {string|null} [value=null] - The optional value to check for.
     * @returns {boolean} - True if the attribute exists, false otherwise.
     */
    hasDataAttr(root, dataName, value = null) {
        const methodName = 'dom.hasDataAttr';
        if (
            !this.validateRoot(root, methodName) ||
            !this.validateDataName(dataName, methodName)
        )
            return false;

        if (!root.hasAttribute(`data-${dataName}`)) return false;

        if (value === null) return true;

        if (!this.validateDataValue(value, methodName)) return false;

        const currentValue = root.getAttribute(`data-${dataName}`);
        return currentValue
            ? currentValue.trim().split(/\s+/).includes(value)
            : false;
    },

    /**
     * Checks if a data attribute is empty or not set.
     * @param {Element} root - The element to check.
     * @param {string} dataName - The data attribute name.
     * @returns {boolean} - True if the attribute is empty or not set, false otherwise.
     */
    isEmpty(root, dataName) {
        if (
            !this.validateRoot(root, 'dom.isEmpty') ||
            !this.validateDataName(dataName, 'dom.isEmpty')
        )
            return false;
        let value = root.getAttribute(`data-${dataName}`);
        return value === null || value.trim() === '';
    },

    /**
     * Finds the closest ancestor with the specified data attribute.
     * @param {Element} root - The starting element.
     * @param {string} dataName - The data attribute name.
     * @param {string|null} [value=null] - The optional value of the data attribute.
     * @returns {Element|null} - The closest matching ancestor or null if not found.
     */
    closestDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.closestDataAttr') ||
            !this.validateDataName(dataName, 'dom.closestDataAttr') ||
            !this.validateDataValue(value, 'dom.closestDataAttr')
        )
            return null;
        return root.closest(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    /**
     * Checks if the element matches the specified data attribute.
     * @param {Element} root - The element to check.
     * @param {string} dataName - The data attribute name.
     * @param {string|null} [value=null] - The optional value of the data attribute.
     * @returns {boolean} - True if the element matches, false otherwise.
     */
    matchesDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.matchesDataAttr') ||
            !this.validateDataName(dataName, 'dom.matchesDataAttr') ||
            !this.validateDataValue(value, 'dom.matchesDataAttr')
        )
            return false;
        return root.matches(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    /**
     * Toggles a data attribute on the element.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name.
     * @param {string|null} [value=null] - The value to toggle.
     * @returns {boolean} - True if the attribute was added, false if removed.
     */
    toggleDataAttr(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dom.toggleDataAttr') ||
            !this.validateDataName(dataName, 'dom.toggleDataAttr') ||
            !this.validateDataValue(value, 'dom.toggleDataAttr')
        )
            return false;
        const currentValue = root.getAttribute(`data-${dataName}`);
        if (currentValue === value || (value === '' && currentValue !== null)) {
            root.removeAttribute(`data-${dataName}`);
            return false;
        }
        root.setAttribute(`data-${dataName}`, value);
        return true;
    },

    /**
     * Toggles between two values for a data attribute.
     * @param {Element} root - The element to modify.
     * @param {string} dataName - The data attribute name.
     * @param {string|null} [value1=null] - The first value.
     * @param {string|null} [value2=null] - The second value.
     * @returns {string|null} - The new value of the attribute.
     */
    toggleDataAttrValue(root, dataName, value1 = null, value2 = null) {
        if (
            !this.validateRoot(root, 'dom.toggleDataAttrValue') ||
            !this.validateDataName(dataName, 'dom.toggleDataAttrValue') ||
            !this.validateDataValue(value1, 'dom.toggleDataAttrValue') ||
            !this.validateDataValue(value2, 'dom.toggleDataAttrValue')
        )
            return false;
        const currentValue = root.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        root.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    },

    /**
     * Observes changes to a specific data attribute on the element.
     * @param {Element} root - The element to observe.
     * @param {string} dataName - The data attribute name.
     * @param {Function} callback - The callback to execute on changes.
     * @param {Object} [config={attributes: true}] - The MutationObserver configuration.
     * @returns {MutationObserver|boolean} - The observer instance or false if invalid.
     */
    observe(root, dataName, callback, config = {attributes: true}) {
        if (
            !this.validateRoot(root, 'dom.observe') ||
            !this.validateDataName(dataName, 'dom.observe')
        )
            return false;
        if (typeof callback !== 'function') {
            console.error('[RAMS] dom.observe: Callback must be a function.');
            return false;
        }

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(root, root.getAttribute(`data-${dataName}`));
                }
            }
        });

        observer.observe(root, config);
        return observer;
    },

    /**
     * Disconnects a MutationObserver.
     * @param {MutationObserver} observer - The observer to disconnect.
     * @returns {boolean} - True if successful, false otherwise.
     */
    disconnectObserver(observer) {
        if (!(observer instanceof MutationObserver)) {
            console.error(
                '[RAMS] dom.disconnectObserver: Provided observer is not a valid MutationObserver.'
            );
            return false;
        }
        observer.disconnect();
        return true;
    },

    /**
     * Observes changes to a specific data attribute with a debounce delay.
     * @param {Element} root - The element to observe.
     * @param {string} dataName - The data attribute name.
     * @param {Function} callback - The callback to execute on changes.
     * @param {number} [delay=300] - The debounce delay in milliseconds.
     * @param {Object} [config={attributes: true}] - The MutationObserver configuration.
     * @returns {MutationObserver|boolean} - The observer instance or false if invalid.
     */
    debouncedObserver(
        root,
        dataName,
        callback,
        delay = 300,
        config = {attributes: true}
    ) {
        if (
            !this.validateRoot(root, 'dom.debouncedObserver') ||
            !this.validateDataName(dataName, 'dom.debouncedObserver')
        )
            return false;
        if (typeof callback !== 'function') {
            console.error(
                '[RAMS] dom.debouncedObserver: Callback must be a function.'
            );
            return false;
        }
        if (typeof delay !== 'number' || delay < 0) {
            console.error(
                '[RAMS] dom.debouncedObserver: Delay must be a non-negative number.'
            );
            return false;
        }

        let timeout;
        const observer = new MutationObserver((mutations) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                for (const mutation of mutations) {
                    if (mutation.attributeName === `data-${dataName}`) {
                        callback(root, root.getAttribute(`data-${dataName}`));
                    }
                }
            }, delay);
        });

        observer.observe(root, config);
        return observer;
    },
};
