import {validator} from './valid.js';

export class TypedEnforcer {
    constructor(validate, initialValue) {
        if (typeof validate !== 'function' && typeof validate !== 'string') {
            throw new Error(
                'Invalid validate parameter. Must be a function or string.'
            );
        }
        this.validate = validate;
        this.value = validator(validate)(initialValue);
    }

    get() {
        return this.value;
    }

    set(newValue) {
        this.value = validator(this.validate)(newValue);
    }
}
