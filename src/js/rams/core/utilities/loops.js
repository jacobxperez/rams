import {
    isArray,
    isIterable,
    isFunction,
    isObject,
} from '../validators/standard.js';

export const each = (array, callback) => {
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
};

export const eachOf = (iterable, callback) => {
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
};

export const eachOfIn = (object, callback) => {
    if (!isObject(object)) {
        throw new TypeError(
            `eachOfIn can only be called on an object, but received ${typeof object}`
        );
    }
    if (isFunction(callback)) {
        for (const property in object) {
            callback(object[property], property);
        }
    }
};

export const map = (array, callback) => {
    if (!isArray(array)) {
        throw new TypeError(
            `map can only be called on an array, but received ${typeof array}`
        );
    }
    if (isFunction(callback)) {
        return array.map(callback);
    }
};
