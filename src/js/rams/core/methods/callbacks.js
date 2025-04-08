import {validate} from '../utilities/validator';

export function callback(callback) {
    if (typeof callback !== 'function') {
        validate.logError('callback', 'Callback must be a function.');
        return false;
    }

    callback();
}
