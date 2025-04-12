export const isStringPattern = (pattern) => {
    return (str) => {
        if (typeof str !== 'string') return false;
        const regex = new RegExp(pattern);
        return regex.test(str);
    };
};

/**
 * Checks if a string is a valid Base64 encoded string.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is valid Base64, false otherwise.
 */
export const isBase64 = isStringPattern(/^[A-Za-z0-9+/]+={0,2}$/);

/**
 * Checks if a string is a valid JSON Web Token (JWT).
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a valid JWT, false otherwise.
 */
export const isJWT = isStringPattern(
    /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/
);

/**
 * Checks if a string is safe and does not contain potentially harmful characters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is safe, false otherwise.
 */
export const isSafeString = isStringPattern(/^[^<>/"'`;(){}[\]]*$/);

/**
 * Checks if a string is safe from SQL injection patterns.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is safe from SQL injection, false otherwise.
 */
export const isSafeSQL = isStringPattern(
    /^(?!.*\b(SELECT|UPDATE|DELETE|INSERT|DROP|--|;)\b).*$/i
);

/**
 * Checks if a filename is safe and does not contain invalid or dangerous characters.
 *
 * @param {string} name - The filename to check.
 * @returns {boolean} True if the filename is safe, false otherwise.
 */
export const isSafeFilename = isStringPattern(/^[a-zA-Z0-9_.-]+$/);

/**
 * Checks if a string is free from script tags.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is free from script tags, false otherwise.
 */
export const isScriptFree = isStringPattern(/^((?!<\s*script).)*$/gi);

/**
 * Checks if a string is a valid MIME type.
 *
 * @param {string} type - The string to check.
 * @returns {boolean} True if the string is a valid MIME type, false otherwise.
 */
export const isMimeType = isStringPattern(/^[\w-]+\/[\w+.-]+$/);

/**
 * Checks if a string is a strong password.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a strong password, false otherwise.
 */
export const isStrongPassword = isStringPattern(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
);

/**
 * Checks if a string is a valid email address.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if the email address is valid, false otherwise.
 */
export const isEmail = isStringPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

/**
 * Checks if a string is a valid phone number.
 *
 * @param {string} phone - The phone number to check.
 * @returns {boolean} True if the phone number is valid, false otherwise.
 */
export const isPhoneNumber = isStringPattern(/^\+?[1-9]\d{1,14}$/);

/**
 * Checks if a string is a valid URL.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export const isURL = (url) => {
    if (typeof url !== 'string') return false;
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};

/**
 * Checks if a string is a valid hexadecimal color code.
 *
 * @param {string} color - The color code to check.
 * @returns {boolean} True if the color code is valid, false otherwise.
 */
export const isHexColor = isStringPattern(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/);

/**
 * Checks if a string is a valid UUID.
 *
 * @param {string} uuid - The UUID to check.
 * @returns {boolean} True if the UUID is valid, false otherwise.
 */
export const isUUID = isStringPattern(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
);

/**
 * Checks if a string is a valid date in the format YYYY-MM-DD.
 *
 * @param {string} date - The date to check.
 * @returns {boolean} True if the date is valid, false otherwise.
 */
export const isValidDate = isStringPattern(/^\d{4}-\d{2}-\d{2}$/);

/**
 * Checks if a string is a valid time in the format HH:MM.
 *
 * @param {string} time - The time to check.
 * @returns {boolean} True if the time is valid, false otherwise.
 */
export const isValidTime = isStringPattern(/^([01]\d|2[0-3]):([0-5]\d)$/);
