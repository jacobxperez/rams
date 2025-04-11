import {isArray, isIterable, isFunction, isObject} from './validate.js';

export function each(array, callback) {
    if (!isArray(array)) {
        throw new TypeError(
            `each can only be called on an array, but received ${typeof array}`
        );
    }
    if (isFunction(callback)) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    }
}

export function eachOf(iterable, callback) {
    if (!isIterable(iterable)) {
        throw new TypeError(
            `eachOf can only be called on an iterable, but received ${typeof iterable}`
        );
    }
    if (isFunction(callback)) {
        for (const item of iterable) {
            callback(item);
        }
    }
}

export function eachIn(object, callback) {
    if (!isObject(object)) {
        throw new TypeError(
            `eachIn can only be called on an object, but received ${typeof object}`
        );
    }
    if (isFunction(callback)) {
        for (const property in object) {
            callback(property);
        }
    }
}
