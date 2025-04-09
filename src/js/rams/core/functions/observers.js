import {validate} from '../utils/validate.js';

export function observe(root, dataName, callback, config = {attributes: true}) {
    const methodName = 'observe';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName)
    )
        return false;
    if (typeof callback !== 'function') {
        console.error(methodName, 'Callback must be a function.');
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
}

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

export function debouncedObserver(
    root,
    dataName,
    callback,
    delay = 300,
    config = {attributes: true}
) {
    const methodName = 'debouncedObserver';

    if (
        !validate.domElement(root, methodName) ||
        !validate.isString(dataName, methodName)
    )
        return false;
    if (typeof callback !== 'function') {
        console.error(methodName, 'Callback must be a function.');
        return false;
    }
    if (typeof delay !== 'number' || delay < 0) {
        console.error(methodName, 'Delay must be a non-negative number.');
        return false;
    }

    let timeout;
    const observer = new MutationObserver((mutations) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === `data-${dataName}`) {
                    callback(root, root.getAttribute(`data-${dataName}`));
                }
            });
        }, delay);
    });

    observer.observe(root, config);
    return observer;
}
