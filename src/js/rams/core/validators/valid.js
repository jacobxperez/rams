/**
 * Creates a validator function that validates a value based on the provided validation logic.
 *
 * @param {Function|string} validate - A function to validate the value or a string representing the type to validate against.
 * @returns {Function} A function that validates the value and returns the value if valid, otherwise `false`.
 */
export const validator = (validate) => (value) => {
    if (typeof validate === 'function') {
        return validate(value) ? value : false;
    }
    if (isString(validate)) {
        return isTypeOf(validate)(value) ? value : false;
    }
    console.error('Invalid validator type:', typeof validate);
};

/**
 * Creates a validator that checks if a value is an instance of any of the provided constructors.
 *
 * @param {...Function} constructors - The constructor functions to check against.
 * @returns {Function} A validator function that returns the value if it is an instance of any of the constructors, otherwise `false`.
 */
export const isInstanceOf =
    (...constructors) =>
    (value) => {
        if (constructors.some((constructor) => value instanceof constructor)) {
            return value;
        }
        console.error(
            'Must be an instance of one of the provided constructors. Received:',
            typeof value
        );
    };

/**
 * Creates a validator that allows `undefined` or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not `undefined`.
 * @returns {Function} A validator function that returns `true` if the value is `undefined` or passes the provided validator, otherwise `false`.
 */
export const isOptional = (validator) => (value) =>
    value === undefined || (validator && validator(value))
        ? true
        : console.error(
              'Must be undefined or pass the provided validator. Received:',
              typeof value
          );

/**
 * Creates a validator that allows `null` or validates using the provided validator.
 *
 * @param {Function} validator - The validator function to use if the value is not `null`.
 * @returns {Function} A validator function that returns `true` if the value is `null` or passes the provided validator, otherwise `false`.
 */
export const isNullable = (validator) => (value) =>
    value === null || isOptional(validator)(value)
        ? true
        : console.error(
              'Must be null or pass the provided validator. Received:',
              typeof value
          );

/**
 * Checks if the provided value matches any of the provided types using `typeof`.
 *
 * @param {...string} types - The types to check against (e.g., 'string', 'number').
 * @returns {Function} A validator function that returns the value if it matches any of the types, otherwise `false`.
 */
export const isTypeOf =
    (...types) =>
    (value) =>
        types.includes(typeof value)
            ? value
            : console.error(
                  'Must be one of the provided types. Received:',
                  typeof value
              );

/**
 * Checks if the provided value is a function.
 *
 * @param {any} callback - The value to check.
 * @returns {Function|false} The function itself if it is valid, otherwise `false`.
 */
export const isFunction = (callback) =>
    isTypeOf('function')(callback)
        ? callback
        : console.error('Must be a function. Received:', typeof callback);

/**
 * Checks if the provided value is an object (excluding arrays and `null`).
 *
 * @param {any} obj - The value to check.
 * @returns {Object|false} The object itself if it is valid, otherwise `false`.
 */
export const isObject = (obj) =>
    isTypeOf('object')(obj) && obj !== null && !Array.isArray(obj)
        ? obj
        : console.error('Must be an object. Received:', typeof obj);

/**
 * Checks if the provided value is an array.
 *
 * @param {any} array - The value to check.
 * @returns {Array|false} The array itself if it is valid, otherwise `false`.
 */
export const isArray = (array) =>
    Array.isArray(array)
        ? array
        : console.error('Must be an array. Received:', typeof array);

/**
 * Checks if the provided value is a Map.
 *
 * @param {any} value - The value to check.
 * @returns {Map|false} The Map itself if it is valid, otherwise `false`.
 */
export const isMap = (value) =>
    isInstanceOf(Map)(value)
        ? value
        : console.error('Must be a Map. Received:', typeof value);

/**
 * Checks if the provided value is a Set.
 *
 * @param {any} value - The value to check.
 * @returns {Set|false} The Set itself if it is valid, otherwise `false`.
 */
export const isSet = (value) =>
    isInstanceOf(Set)(value)
        ? value
        : console.error('Must be a Set. Received:', typeof value);

/**
 * Checks if the provided value is a DOM element.
 *
 * @param {any} root - The value to check.
 * @returns {Element|Document|DocumentFragment|false} The DOM element itself if it is valid, otherwise `false`.
 */
export const isDomElement = (root) =>
    isInstanceOf(Element, Document, DocumentFragment)(root)
        ? root
        : console.error('Must be a DOM element. Received:', typeof root);

/**
 * Checks if the provided value is a non-empty string.
 *
 * @param {any} string - The value to check.
 * @returns {string|false} The string itself if it is valid, otherwise `false`.
 */
export const isNonEmptyString = (string) =>
    isTypeOf('string')(string) && string.trim() !== ''
        ? string
        : console.error('Must be a non-empty string. Received:', typeof string);

/**
 * Checks if the provided value is a string.
 *
 * @param {any} string - The value to check.
 * @returns {string|false} The string itself if it is valid, otherwise `false`.
 */
export const isString = (string) =>
    isTypeOf('string')(string)
        ? string
        : console.error('Must be a string. Received:', typeof string);

/**
 * Checks if the provided value is iterable.
 *
 * @param {any} input - The value to check.
 * @returns {Iterable|false} The iterable itself if it is valid, otherwise `false`.
 */
export const isIterable = (input) =>
    input != null && typeof input[Symbol.iterator] === 'function'
        ? input
        : console.error('Must be iterable. Received:', typeof input);

/**
 * Checks if the provided value is a number.
 *
 * @param {any} value - The value to check.
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.allowNaN=false] - Whether to allow `NaN` as a valid number.
 * @returns {number|false} The number itself if it is valid, otherwise `false`.
 */
export const isNumber = (value, {allowNaN = false} = {}) =>
    isTypeOf('number')(value) && (allowNaN || !isNaN(value))
        ? value
        : console.error('Must be a number. Received:', typeof value);

/**
 * Checks if the provided value is a boolean.
 *
 * @param {any} val - The value to check.
 * @returns {boolean|false} The boolean itself if it is valid, otherwise `false`.
 */
export const isBoolean = (val) =>
    isTypeOf('boolean')(val)
        ? val
        : console.error('Must be a boolean. Received:', typeof val);

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
export const ifValid = (validator) => (callback) => {
    if (validator) {
        return callback();
    }
    console.warn('ifValid: Validator failed for', validator);
    return false;
};
