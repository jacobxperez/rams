import {validate} from '../utilities/validate.js';

/**
 * Executes a callback function if it is valid.
 *
 * @param {Function} callback - The callback function to execute.
 * @param {string} functionName - The name of the function calling the callback, used for validation.
 */
export function callback(callback, functionName) {
    if (validate.isFunction(callback, functionName)) {
        callback();
    }
}
