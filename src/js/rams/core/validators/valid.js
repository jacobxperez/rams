/**
 * Creates a validator that checks if a value is an instance of any of the provided constructors.
 *
 * @param {...Function} constructors - The constructor functions to check against.
 * @returns {Function} A validator function that returns `true` if the value is an instance of any of the constructors, otherwise `false`.
 */
export const isInstanceOf =
    (...constructors) =>
    (value) => {
        if (constructors.some((constructor) => value instanceof constructor)) {
            return true;
        }
        console.error(
            'Must be an instance of one of the provided constructors. Received:',
            typeof value
        );
        return false;
    };

/**
 * Creates a validator that allows `undefined` or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not `undefined`.
 * @returns {Function} A validator function that returns `true` if the value is `undefined` or passes the provided validator, otherwise `false`.
 */
export const isOptional = (validator) => (value) =>
    value === undefined || (validator && validator(value)) ? true : false;

/**
 * Creates a validator that allows `null` or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not `null`.
 * @returns {Function} A validator function that returns `true` if the value is `null` or passes the provided validator, otherwise `false`.
 */
export const isNullable = (validator) => (value) =>
    value === null || isOptional(validator)(value) ? true : false;

/**
 * Checks if the provided value matches any of the provided types using `typeof`.
 *
 * @param {...string} types - The types to check against (e.g., 'string', 'number').
 * @returns {Function} A validator function that returns `true` if the value matches any of the types, otherwise `false`.
 */
export const isTypeOf =
    (...types) =>
    (value) =>
        types.includes(typeof value) ? true : false;

/**
 * Checks if the provided value is a function.
 *
 * @param {any} callback - The value to check.
 * @returns {boolean} `true` if the value is a function, otherwise `false`.
 */
export const isFunction = (callback) =>
    isTypeOf('function')(callback) ? true : false;

/**
 * Checks if the provided value is an object (excluding arrays and `null`).
 *
 * @param {any} obj - The value to check.
 * @returns {boolean} `true` if the value is an object, otherwise `false`.
 */
export const isObject = (obj) =>
    isTypeOf('object')(obj) && obj !== null && !Array.isArray(obj)
        ? true
        : false;

/**
 * Checks if the provided value is an array.
 *
 * @param {any} array - The value to check.
 * @returns {boolean} `true` if the value is an array, otherwise `false`.
 */
export const isArray = (array) => (Array.isArray(array) ? true : false);

/**
 * Checks if the provided value is a Map.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} `true` if the value is a Map, otherwise `false`.
 */
export const isMap = (value) => (isInstanceOf(Map)(value) ? true : false);

/**
 * Checks if the provided value is a Set.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} `true` if the value is a Set, otherwise `false`.
 */
export const isSet = (value) => (isInstanceOf(Set)(value) ? true : false);

/**
 * Checks if the provided value is a DOM element.
 *
 * @param {any} root - The value to check.
 * @returns {boolean} `true` if the value is a DOM element, otherwise `false`.
 */
export const isDomElement = (root) =>
    isInstanceOf(Element, Document, DocumentFragment)(root) ? true : false;

/**
 * Checks if the provided value is a non-empty string.
 *
 * @param {any} string - The value to check.
 * @returns {boolean} `true` if the value is a non-empty string, otherwise `false`.
 */
export const isNonEmptyString = (string) =>
    isTypeOf('string')(string) && string.trim() !== '' ? true : false;

/**
 * Checks if the provided value is a string.
 *
 * @param {any} string - The value to check.
 * @returns {boolean} `true` if the value is a string, otherwise `false`.
 */
export const isString = (string) => (isTypeOf('string')(string) ? true : false);

/**
 * Checks if the provided value is iterable.
 *
 * @param {any} input - The value to check.
 * @returns {boolean} `true` if the value is iterable, otherwise `false`.
 */
export const isIterable = (input) =>
    input != null && typeof input[Symbol.iterator] === 'function'
        ? true
        : false;

/**
 * Checks if the provided value is a number.
 *
 * @param {any} value - The value to check.
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.allowNaN=false] - Whether to allow `NaN` as a valid number.
 * @returns {boolean} `true` if the value is a number, otherwise `false`.
 */
export const isNumber = (value, {allowNaN = false} = {}) =>
    isTypeOf('number')(value) && (allowNaN || !isNaN(value)) ? true : false;

/**
 * Checks if the provided value is a boolean.
 *
 * @param {any} val - The value to check.
 * @returns {boolean} `true` if the value is a boolean, otherwise `false`.
 */
export const isBoolean = (val) => (isTypeOf('boolean')(val) ? true : false);

/**
 * Checks if the provided value is empty.
 *
 * For strings: Returns `true` if the string is empty or contains only whitespace.
 * For arrays: Returns `true` if the array has no elements.
 * For objects: Returns `true` if the object has no own enumerable properties.
 * For Map and Set: Returns `true` if they have no elements.
 * For other types: Logs a warning and returns `false`.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} `true` if the value is empty, otherwise `false`.
 */
export const isEmpty = (value) => {
    if (isString(value)) return value.trim() === '';
    if (isArray(value)) return value.length === 0;
    if (isMap(value) || isSet(value)) return value.size === 0;
    if (isObject(value)) return Object.keys(value).length === 0;
    console.warn('Unsupported type for isEmpty. Received:', typeof value);
    return false;
};

/**
 * Checks if any of the provided validators return `true`.
 *
 * @param {...boolean} validators - The validators to check.
 * @returns {boolean} `true` if any validator returns `true`, otherwise `false`.
 */
export const anyValid = (...validators) =>
    validators.some((validator) => validator === true);

/**
 * Checks if all of the provided validators return `true`.
 *
 * @param {...Function} validators - The validators to check.
 * @returns {Function} A function that returns `true` if all validators return `true`, otherwise `false`.
 */
export const allValid =
    (...validators) =>
    (...values) =>
        validators.length === values.length &&
        validators.every((validator, i) => validator(values[i]));

/**
 * Executes a callback if the provided validator function returns `true`.
 *
 * @param {Function} validator - The validator function to check.
 * @returns {Function} A function that takes a callback to execute if the validator passes.
 */
export const ifValid = (validator) => (callback) => (val) => {
    if (validator) {
        return callback(val);
    }
    console.warn('ifValid: Validator failed for', validator);
    return false;
};
