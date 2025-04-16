import {validator} from './valid.js';

/**
 * A class that enforces a specific type or validation logic for a value.
 */
export class TypeEnforcer {
    /**
     * Creates an instance of TypedEnforcer.
     *
     * @param {Function|string} validate - A function or string representing the validation logic or type.
     * @param {any} initialValue - The initial value to validate and set.
     * @throws {Error} Throws an error if the `validate` parameter is not a function or string.
     */
    constructor(validate, initialValue) {
        if (typeof validate !== 'function' && typeof validate !== 'string') {
            throw new Error(
                'Invalid validate parameter. Must be a function or string.'
            );
        }
        this.validate = validate;
        this.value = validator(validate)(initialValue);
    }

    /**
     * Retrieves the current value.
     *
     * @returns {any} The current value.
     */
    get() {
        return this.value;
    }

    /**
     * Sets a new value after validating it.
     *
     * @param {any} newValue - The new value to validate and set.
     */
    set(newValue) {
        this.value = validator(this.validate)(newValue);
    }
}
