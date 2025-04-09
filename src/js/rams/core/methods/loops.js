import {validate} from '../utilities/validator.js';

function each(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(
            `each can only be called on an array, but received ${typeof array}`
        );
    }
    if (validate.isFunction(callback, 'each')) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    }
}

function eachOf(iterable, callback) {
    if (!(iterable && typeof iterable[Symbol.iterator] === 'function')) {
        throw new TypeError(
            `eachOf can only be called on an iterable, but received ${typeof iterable}`
        );
    }
    if (validate.isFunction(callback, 'eachOf')) {
        for (const item of iterable) {
            callback(item);
        }
    }
}

function eachIn(object, callback) {
    if (typeof object !== 'object' || object === null) {
        throw new TypeError(
            `eachIn can only be called on an object, but received ${typeof object}`
        );
    }
    if (validate.isFunction(callback, 'eachIn')) {
        for (const property in object) {
            callback(property);
        }
    }
}

export {each, eachOf, eachIn};
