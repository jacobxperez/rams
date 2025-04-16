import {validator} from './valid';

export class TypedEnforcer {
    constructor(validate, initialValue) {
        this.validate = validate;
        this.value = validator(validate, initialValue);
    }

    get() {
        return this.value;
    }

    set(newValue) {
        this.value = validator(this.validate, newValue);
    }
}
