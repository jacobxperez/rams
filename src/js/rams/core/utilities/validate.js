/**
 * Checks if the provided callback is a function.
 * @param {any} callback - The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export const isFunction = (callback) => typeof callback === 'function';

/**
 * Checks if the provided value is an object (excluding arrays and null).
 * @param {any} obj - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export const isObject = (obj) => typeof obj === 'object' && obj !== null && !Array.isArray(obj);

/**
 * Checks if the provided value is an array.
 * @param {any} array - The value to check.
 * @returns {boolean} True if the value is an array, otherwise false.
 */
export const isArray = (array) => Array.isArray(array);

/**
 * Checks if the provided value is a DOM element.
 * @param {any} root - The value to check.
 * @returns {boolean} True if the value is a DOM element, otherwise false.
 */
export const isDomElement = (root) =>
    root &&
    (root instanceof Element ||
        root instanceof Document ||
        root instanceof DocumentFragment);

/**
 * Checks if the provided value is a non-empty string.
 * @param {any} string - The value to check.
 * @returns {boolean} True if the value is a non-empty string, otherwise false.
 */
export const isString = (string) => typeof string === 'string' && string.trim() !== '';

/**
 * Checks if the provided value is iterable.
 * @param {any} input - The value to check.
 * @returns {boolean} True if the value is iterable, otherwise false.
 */
export const isIterable = (input) => input != null && typeof input[Symbol.iterator] === 'function';

/**
 * Checks if the provided value is a number.
 * @param {any} value - The value to check.
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.allowNaN=false] - Whether to allow NaN as a valid number.
 * @returns {boolean} True if the value is a number, otherwise false.
 */
export const isNumber = (value, { allowNaN = false } = {}) =>
    typeof value === 'number' && (allowNaN || !isNaN(value));

/**
 * Checks if the provided value is a boolean.
 * @param {any} val - The value to check.
 * @returns {boolean} True if the value is a boolean, otherwise false.
 */
export const isBoolean = (val) => typeof val === 'boolean';

/**
 * Checks if the provided value is a valid date.
 * @param {any} val - The value to check.
 * @returns {boolean} True if the value is a valid date, otherwise false.
 */
export const isDate = (val) => val instanceof Date && !isNaN(val.getTime());

/**
 * Creates a validator that allows null or validates using the provided validator.
 * @param {Function} validator - The validator function.
 * @returns {Function} A new validator function.
 */
export const isNullable = (validator) => (value) => value == null || validator(value);

/**
 * Creates a validator that allows undefined or validates using the provided validator.
 * @param {Function} validator - The validator function.
 * @returns {Function} A new validator function.
 */
export const isOptional = (validator) => (value) => value === undefined || validator(value);

/**
 * Creates a validator that checks if a value is one of the provided options.
 * @param {...any} options - The allowed options.
 * @returns {Function} A new validator function.
 */
export const isOneOf = (...options) => (value) => options.includes(value);

/**
 * Creates a validator that checks if a value is an instance of the provided constructor.
 * @param {Function} constructor - The constructor function.
 * @returns {Function} A new validator function.
 */
export const isInstanceOf = (constructor) => (value) => value instanceof constructor;
