import {validate} from './validate.js';

export function each(array, callback) {
    if (!validate.array(array)) {
        throw new TypeError(
            `each can only be called on an array, but received ${typeof array}`
        );
    }
    if (validate.function(callback)) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    }
}

export function eachOf(iterable, callback) {
    if (!validate.iterable(iterable)) {
        throw new TypeError(
            `eachOf can only be called on an iterable, but received ${typeof iterable}`
        );
    }
    if (validate.function(callback)) {
        for (const item of iterable) {
            callback(item);
        }
    }
}

export function eachIn(object, callback) {
    if (!validate.object(object)) {
        throw new TypeError(
            `eachIn can only be called on an object, but received ${typeof object}`
        );
    }
    if (validate.function(callback)) {
        for (const property in object) {
            callback(property);
        }
    }
}
