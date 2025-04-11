import {validate} from '../utils/validate.js';

/**
 * Creates a MutationObserver callback function.
 *
 * @param {string} dataName - The data attribute name to observe.
 * @param {Function} callback - The callback function to execute when the attribute changes.
 * @param {number|null} [delay=null] - Optional delay in milliseconds for debouncing the callback.
 * @returns {Function} The MutationObserver callback function.
 */
function createObserverCallback(dataName, callback, delay = null) {
    let timeout;
    return (mutations) => {
        if (delay !== null) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === `data-${dataName}`) {
                        callback(
                            mutation.target,
                            mutation.target.getAttribute(`data-${dataName}`)
                        );
                    }
                });
            }, delay);
        } else {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(
                        mutation.target,
                        mutation.target.getAttribute(`data-${dataName}`)
                    );
                }
            });
        }
    };
}

/**
 * Observes changes to a specified data attribute on a DOM element.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to observe.
 * @param {string} dataName - The data attribute name to observe.
 * @param {Function} callback - The callback function to execute when the attribute changes.
 * @param {Object} [config={attributes: true}] - The configuration object for the MutationObserver.
 * @returns {MutationObserver|boolean} The created MutationObserver instance, or false if validation fails.
 */
export function observe(root, dataName, callback, config = {attributes: true}) {
    const methodName = 'observe';

    if (!validate.domElement(root) || !validate.string(dataName)) {
        console.error(methodName, 'Invalid root element or dataName.');
        return false;
    }

    if (typeof callback !== 'function') {
        console.error(methodName, 'Callback must be a function.');
        return false;
    }

    const observer = new MutationObserver(
        createObserverCallback(dataName, callback)
    );
    observer.observe(root, config);
    return observer;
}

/**
 * Disconnects a MutationObserver instance.
 *
 * @param {MutationObserver} observer - The MutationObserver instance to disconnect.
 * @returns {boolean} True if the observer was successfully disconnected, false otherwise.
 */
export function disconnectObserver(observer) {
    const methodName = 'disconnectObserver';

    if (!(observer instanceof MutationObserver)) {
        console.error(
            methodName,
            'Provided observer is not a valid MutationObserver.'
        );
        return false;
    }
    observer.disconnect();
    return true;
}

/**
 * Observes changes to a specified data attribute on a DOM element with debouncing.
 *
 * @param {Element|Document|DocumentFragment} root - The root element to observe.
 * @param {string} dataName - The data attribute name to observe.
 * @param {Function} callback - The callback function to execute when the attribute changes.
 * @param {number} [delay=300] - The delay in milliseconds for debouncing the callback.
 * @param {Object} [config={attributes: true}] - The configuration object for the MutationObserver.
 * @returns {MutationObserver|boolean} The created MutationObserver instance, or false if validation fails.
 */
export function debouncedObserver(
    root,
    dataName,
    callback,
    delay = 300,
    config = {attributes: true}
) {
    const methodName = 'debouncedObserver';

    if (!validate.domElement(root) || !validate.string(dataName)) {
        console.error(methodName, 'Invalid root element or dataName.');
        return false;
    }

    if (typeof callback !== 'function') {
        console.error(methodName, 'Callback must be a function.');
        return false;
    }

    if (typeof delay !== 'number' || delay < 0) {
        console.error(methodName, 'Delay must be a non-negative number.');
        return false;
    }

    const observer = new MutationObserver(
        createObserverCallback(dataName, callback, delay)
    );
    observer.observe(root, config);
    return observer;
}
