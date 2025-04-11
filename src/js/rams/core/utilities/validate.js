// Validate if the input is a DOM element, document, or document fragment
export const validateDomElement = (root) =>
    root instanceof Element ||
    root instanceof Document ||
    root instanceof DocumentFragment;

// Validate if the input is a non-empty string
export const validateString = (str) =>
    typeof str === 'string' && str.trim() !== '';

// Validate if the input is a function
export const validateFunction = (fn) => typeof fn === 'function';

// Validate if the input is an array
export const validateArray = (arr) => Array.isArray(arr);

// Validate if the input is an object (optionally strict)
export const validateObject = (obj, {strict = false} = {}) =>
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj) &&
    (!strict || Object.getPrototypeOf(obj) === Object.prototype);

// Validate if the input is a number (optionally allow NaN)
export const validateNumber = (value, {allowNaN = false} = {}) =>
    typeof value === 'number' && (allowNaN || !isNaN(value));

// Validate if the input is a boolean
export const validateBoolean = (val) => typeof val === 'boolean';

// Validate if the input is a valid date
export const validateDate = (val) =>
    val instanceof Date && !isNaN(val.getTime());

// Validate if the input is iterable
export const validateIterable = (input) =>
    input != null && typeof input[Symbol.iterator] === 'function';

// Validate if the input is null or passes the given validator
export const validateNullable = (validator) => (value) =>
    value == null || validator(value);

// Validate if the input is undefined or passes the given validator
export const validateOptional = (validator) => (value) =>
    value === undefined || validator(value);

// Validate if the input matches one of the provided options
export const validateOneOf =
    (...options) =>
    (value) =>
        options.includes(value);

// Validate if the input is an instance of the given constructor
export const validateInstanceOf = (constructor) => (value) =>
    value instanceof constructor;

// Validate using multiple validators and optionally execute a callback if all pass
export const validateMulti = (validators, value, callback) => {
    const allValid = validators.every((fn) => fn(value));
    if (allValid && typeof callback === 'function') {
        callback(value);
        return true;
    }
    return false;
};

// Asynchronously validate using multiple validators and optionally execute a callback if all pass
export const validateMultiAsync = async (validators, value, callback) => {
    const results = await Promise.all(validators.map((fn) => fn(value)));
    const allValid = results.every(Boolean);
    if (allValid && typeof callback === 'function') {
        await callback(value);
        return true;
    }
    return false;
};
