export const validate = {
    domElement: (root) =>
        root instanceof Element ||
        root instanceof Document ||
        root instanceof DocumentFragment,

    string: (str) => typeof str === 'string' && str.trim() !== '',

    function: (fn) => typeof fn === 'function',

    array: (arr) => Array.isArray(arr),

    object: (obj, {strict = false} = {}) =>
        typeof obj === 'object' &&
        obj !== null &&
        !Array.isArray(obj) &&
        (!strict || Object.getPrototypeOf(obj) === Object.prototype),

    number: (value, {allowNaN = false} = {}) =>
        typeof value === 'number' && (allowNaN || !isNaN(value)),

    boolean: (val) => typeof val === 'boolean',

    date: (val) => val instanceof Date && !isNaN(val.getTime()),

    iterable: (input) =>
        input != null && typeof input[Symbol.iterator] === 'function',

    nullable: (validator) => (value) => value == null || validator(value),

    optional: (validator) => (value) => value === undefined || validator(value),

    oneOf:
        (...options) =>
        (value) =>
            options.includes(value),

    instanceOf: (constructor) => (value) => value instanceof constructor,

    multi: (validators, value, callback) => {
        const allValid = validators.every((fn) => fn(value));
        if (allValid && typeof callback === 'function') {
            callback(value);
            return true;
        }
        return false;
    },

    multiAsync: async (validators, value, callback) => {
        const results = await Promise.all(validators.map((fn) => fn(value)));
        const allValid = results.every(Boolean);
        if (allValid && typeof callback === 'function') {
            await callback(value);
            return true;
        }
        return false;
    },
};
