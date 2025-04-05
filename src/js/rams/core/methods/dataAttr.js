export const dataAttr = {
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

    get(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.get') ||
            !this.validateDataName(dataName, 'dataAttr.get') ||
            !this.validateDataValue(value, 'dataAttr.get')
        )
            return null;
        return root.querySelector(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    getAll(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.getAll') ||
            !this.validateDataName(dataName, 'dataAttr.getAll') ||
            !this.validateDataValue(value, 'dataAttr.getAll')
        )
            return [];
        return Array.from(
            root.querySelectorAll(
                value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
            )
        );
    },

    set(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.set') ||
            !this.validateDataName(dataName, 'dataAttr.set') ||
            !this.validateDataValue(value, 'dataAttr.set')
        )
            return false;
        root.setAttribute(`data-${dataName}`, value);
        return true;
    },

    appendValue(root, dataName, value) {
        if (
            !this.validateRoot(root, 'dataAttr.appendValue') ||
            !this.validateDataName(dataName, 'dataAttr.appendValue') ||
            !this.validateDataValue(value, 'dataAttr.appendValue')
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

    remove(root, dataName) {
        if (
            !this.validateRoot(root, 'dataAttr.remove') ||
            !this.validateDataName(dataName, 'dataAttr.remove')
        )
            return false;
        root.removeAttribute(`data-${dataName}`);
        return true;
    },

    removeValue(root, dataName, value) {
        if (
            !this.validateRoot(root, 'dataAttr.removeValue') ||
            !this.validateDataName(dataName, 'dataAttr.removeValue') ||
            !this.validateDataValue(value, 'dataAttr.removeValue')
        )
            return false;
        let currentValue = root.getAttribute(`data-${dataName}`);

        if (!currentValue) {
            console.warn(
                `[RAMS] dataAttr.removeValue: Attribute "data-${dataName}" does not exist.`
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

    replaceValue(root, dataName, oldValue, newValue) {
        if (
            !this.validateRoot(root, 'dataAttr.replaceValue') ||
            !this.validateDataName(dataName, 'dataAttr.replaceValue') ||
            !this.validateDataValue(oldValue, 'dataAttr.replaceValue') ||
            !this.validateDataValue(newValue, 'dataAttr.replaceValue')
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

    has(root, dataName, value = null) {
        const methodName = 'dataAttr.has';
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
            !this.validateRoot(root, 'dataAttr.isEmpty') ||
            !this.validateDataName(dataName, 'dataAttr.isEmpty')
        )
            return false;
        let value = root.getAttribute(`data-${dataName}`);
        return value === null || value.trim() === '';
    },

    closest(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.closest') ||
            !this.validateDataName(dataName, 'dataAttr.closest') ||
            !this.validateDataValue(value, 'dataAttr.closest')
        )
            return null;
        return root.closest(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    matches(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.matches') ||
            !this.validateDataName(dataName, 'dataAttr.matches') ||
            !this.validateDataValue(value, 'dataAttr.matches')
        )
            return false;
        return root.matches(
            value ? `[data-${dataName}="${value}"]` : `[data-${dataName}]`
        );
    },

    toggle(root, dataName, value = null) {
        if (
            !this.validateRoot(root, 'dataAttr.toggle') ||
            !this.validateDataName(dataName, 'dataAttr.toggle') ||
            !this.validateDataValue(value, 'dataAttr.toggle')
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

    toggleValue(root, dataName, value1 = null, value2 = null) {
        if (
            !this.validateRoot(root, 'dataAttr.toggleValue') ||
            !this.validateDataName(dataName, 'dataAttr.toggleValue') ||
            !this.validateDataValue(value1, 'dataAttr.toggleValue') ||
            !this.validateDataValue(value2, 'dataAttr.toggleValue')
        )
            return false;
        const currentValue = root.getAttribute(`data-${dataName}`);
        const newValue = currentValue === value1 ? value2 : value1;
        root.setAttribute(`data-${dataName}`, newValue);
        return newValue;
    },

    observe(root, dataName, callback, config = {attributes: true}) {
        if (
            !this.validateRoot(root, 'dataAttr.observe') ||
            !this.validateDataName(dataName, 'dataAttr.observe')
        )
            return false;
        if (typeof callback !== 'function') {
            console.error(
                '[RAMS] dataAttr.observe: Callback must be a function.'
            );
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
                '[RAMS] dataAttr.disconnectObserver: Provided observer is not a valid MutationObserver.'
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
            !this.validateRoot(root, 'dataAttr.debouncedObserver') ||
            !this.validateDataName(dataName, 'dataAttr.debouncedObserver')
        )
            return false;
        if (typeof callback !== 'function') {
            console.error(
                '[RAMS] dataAttr.debouncedObserver: Callback must be a function.'
            );
            return false;
        }
        if (typeof delay !== 'number' || delay < 0) {
            console.error(
                '[RAMS] dataAttr.debouncedObserver: Delay must be a non-negative number.'
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
