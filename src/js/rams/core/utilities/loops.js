import {
    isArray,
    isIterable,
    isFunction,
    isObject,
} from '../validators/standard.js';

/**
 * Iterates over each element in an array and executes a callback function.
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - The function to execute for each element. Receives the element and its index as arguments.
 * @throws {TypeError} If the provided argument is not an array.
 */
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

/**
 * Iterates over each element in an iterable and executes a callback function.
 * @param {Iterable} iterable - The iterable to iterate over.
 * @param {Function} callback - The function to execute for each element. Receives the element as an argument.
 * @throws {TypeError} If the provided argument is not an iterable.
 */
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

/**
 * Iterates over each property in an object and executes a callback function.
 * @param {Object} object - The object to iterate over.
 * @param {Function} callback - The function to execute for each property. Receives the property value and key as arguments.
 * @throws {TypeError} If the provided argument is not an object.
 */
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

/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @param {Array} array - The array to map over.
 * @param {Function} callback - The function to execute for each element. Receives the element and its index as arguments.
 * @returns {Array} A new array with each element being the result of the callback function.
 * @throws {TypeError} If the provided argument is not an array.
 */
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
