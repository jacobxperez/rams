import {isArray, isIterable, isFunction, isObject} from './validate.js';

const v = {
    isArray: isArray,
    isIterable: isIterable,
    isFunction: isFunction,
    isObject: isObject,
};

export function each(array, callback) {
    if (!v.isArray(array)) {
        throw new TypeError(
            `each can only be called on an array, but received ${typeof array}`
        );
    }
    if (v.isFunction(callback)) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    }
}

export function eachOf(iterable, callback) {
    if (!v.isIterable(iterable)) {
        throw new TypeError(
            `eachOf can only be called on an iterable, but received ${typeof iterable}`
        );
    }
    if (v.isFunction(callback)) {
        for (const item of iterable) {
            callback(item);
        }
    }
}

export function eachIn(object, callback) {
    if (!v.isObject(object)) {
        throw new TypeError(
            `eachIn can only be called on an object, but received ${typeof object}`
        );
    }
    if (v.isFunction(callback)) {
        for (const property in object) {
            callback(property);
        }
    }
}
