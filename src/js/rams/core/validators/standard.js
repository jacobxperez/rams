/**
 * Creates a validator that checks if a value is an instance of the provided constructor.
 *
 * @param {Function} constructor - The constructor function to check against.
 * @returns {Function} A validator function that returns true if the value is an instance of the constructor, otherwise false.
 */
export const isInstanceOf =
    (...constructors) =>
    (value) =>
        constructors.some((constructor) => value instanceof constructor);

/**
 * Checks if the provided value matches any of the provided types using typeof.
 *
 * @param {...string} types - The types to check against.
 * @returns {Function} A validator function that returns true if the value matches any of the types, otherwise false.
 */
export const isTypeOf =
    (...types) =>
    (value) =>
        types.includes(typeof value);

/**
 * Checks if the provided callback is a function.
 * @param {any} callback - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export const isFunction = isTypeOf('function');

/**
 * Checks if the provided value is an object (excluding arrays and null).
 * @param {any} obj - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export const isObject = (obj) =>
    isTypeOf('object')(obj) && obj !== null && !Array.isArray(obj);

/**
 * Checks if the provided value is an array.
 * @param {any} array - The value to check.
 * @returns {boolean} True if the value is an array, otherwise false.
 */
export const isArray = Array.isArray;

/**
 * Checks if the provided value is a DOM element.
 * @param {any} root - The value to check.
 * @returns {boolean} True if the value is a DOM element, otherwise false.
 */
export const isDomElement = (root) =>
    isInstanceOf(Element, Document, DocumentFragment)(root);

/**
 * Checks if the provided value is a non-empty string.
 * @param {any} string - The value to check.
 * @returns {boolean} True if the value is a non-empty string, otherwise false.
 */
export const isString = (string) =>
    isTypeOf('string')(string) && string.trim() !== '';

/**
 * Checks if the provided value is iterable.
 * @param {any} input - The value to check.
 * @returns {boolean} True if the value is iterable, otherwise false.
 */
export const isIterable = (input) =>
    input != null && typeof input[Symbol.iterator] === 'function';

/**
 * Checks if the provided value is a number.
 * @param {any} value - The value to check.
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.allowNaN=false] - Whether to allow NaN as a valid number.
 * @returns {boolean} True if the value is a number, otherwise false.
 */
export const isNumber = (value, {allowNaN = false} = {}) =>
    isTypeOf('number')(value) && (allowNaN || !isNaN(value));

/**
 * Checks if the provided value is a boolean.
 * @param {any} val - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
export const isBoolean = isTypeOf('boolean');

/**
 * Checks if the provided value is empty.
 *
 * For strings: Returns true if the string is empty or contains only whitespace.
 * For arrays: Returns true if the array has no elements.
 * For objects: Returns true if the object has no own enumerable properties.
 * For other types: Returns false.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is empty, otherwise false.
 */
export const isEmpty = (value) => {
    if (isString(value)) return isString(value) && value.trim() === '';
    if (isArray(value)) return isArray(value) && value.length === 0;
    if (isObject(value))
        return isObject(value) && Object.keys(value).length === 0;
    return false;
};

/**
 * Creates a validator that allows null or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not null.
 * @returns {Function} A validator function that returns true if the value is null or passes the provided validator, otherwise false.
 */
export const isNullable = (validator) => (value) =>
    isOptional(isOptional(validator))(value);

/**
 * Creates a validator that allows undefined or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not undefined.
 * @returns {Function} A validator function that returns true if the value is undefined or passes the provided validator, otherwise false.
 */
export const isOptional = (validator) => (value) =>
    value === undefined || validator(value);

/**
 * Creates a validator that checks if a value is one of the provided options.
 *
 * @param {...any} options - The allowed values to check against.
 * @returns {Function} A validator function that returns true if the value matches one of the options, otherwise false.
 */
export const onePass =
    (...options) =>
    (value) =>
        options.some((option) => option(value));

/**
 * Checks if any of the provided asynchronous validator functions pass for a given value.
 *
 * @param {Function[]} validators - An array of asynchronous validator functions to check.
 * @returns {Function} A function that returns a Promise resolving to true if any validator passes, otherwise false.
 */
export const onePassAsync = (validators) => async (value) => {
    for (const validator of validators) {
        if (await validator(value)) {
            return true;
        }
    }
    return false;
};

/**
 * Checks if all provided validator functions pass for a given value.
 *
 * @param {...Function} validators - The validator functions to check.
 * @returns {Function} A function that returns true if all validators pass, otherwise false.
 */
export const allPass =
    (...validators) =>
    (value) =>
        validators.every((validator) => validator(value));

/**
 * Checks if all provided asynchronous validator functions pass for a given value.
 *
 * @param {...Function} validators - The asynchronous validator functions to check.
 * @returns {Function} A function that returns a Promise resolving to true if all validators pass, otherwise false.
 */
export const allPassAsync =
    (...validators) =>
    async (value) => {
        for (const validator of validators) {
            if (!(await validator(value))) {
                return false;
            }
        }
        return true;
    };
