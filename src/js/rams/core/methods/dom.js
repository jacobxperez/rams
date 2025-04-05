export const dom = {
    // Helper function to validate the element
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

    // Helper function to validate the dataName
    validateDataName(dataName, methodName) {
        if (typeof dataName !== 'string' || dataName.trim() === '') {
            console.error(
                `[RAMS] ${methodName}: dataName must be a non-empty string.`
            );
            return false;
        }
        return true;
    },

    // Helper function to validate the dataValue
    validateDataValue(dataValue, methodName) {
        if (dataValue !== null && typeof dataValue !== 'string') {
            console.error(
                `[RAMS] ${methodName}: dataValue must be a string if provided.`
            );
            return false;
        }
        return true;
    },

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

    removeDataAttr(root, dataName) {
        if (
            !this.validateRoot(root, 'dom.removeDataAttr') ||
            !this.validateDataName(dataName, 'dom.removeDataAttr')
        )
            return false;
        root.removeAttribute(`data-${dataName}`);
        return true;
    },

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

    isEmpty(root, dataName) {
        if (
            !this.validateRoot(root, 'dom.isEmpty') ||
            !this.validateDataName(dataName, 'dom.isEmpty')
        )
            return false;
        let value = root.getAttribute(`data-${dataName}`);
        return value === null || value.trim() === '';
    },

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
