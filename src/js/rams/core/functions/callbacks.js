import {validate} from '../utilities/validate.js';

export function callback(callback) {
    if (validate.isFunction(callback, 'callback')) {
        callback();
    }
}
