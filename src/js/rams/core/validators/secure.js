/**
 * Checks if a string is a valid Base64 encoded string.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is valid Base64, false otherwise.
 */
export const isBase64 = (str) => {
    return typeof str === 'string' && /^[A-Za-z0-9+/]+={0,2}$/.test(str.trim());
};

/**
 * Checks if a string is a valid JSON Web Token (JWT).
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a valid JWT, false otherwise.
 */
export const isJWT = (str) => {
    return (
        typeof str === 'string' &&
        /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(str)
    );
};

/**
 * Checks if a string is safe and does not contain potentially harmful characters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is safe, false otherwise.
 */
export const isSafeString = (str) => {
    if (typeof str !== 'string') return false;
    const unsafePattern = /[<>/"'`;(){}[\]]/;
    return !unsafePattern.test(str);
};

/**
 * Checks if a string is safe from SQL injection patterns.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is safe from SQL injection, false otherwise.
 */
export const isSafeSQL = (str) => {
    if (typeof str !== 'string') return false;
    const injectionPattern = /(\b(SELECT|UPDATE|DELETE|INSERT|DROP|--|;)\b)/i;
    return !injectionPattern.test(str);
};

/**
 * Checks if a filename is safe and does not contain invalid or dangerous characters.
 *
 * @param {string} name - The filename to check.
 * @returns {boolean} True if the filename is safe, false otherwise.
 */
export const isSafeFilename = (name) => {
    if (typeof name !== 'string') return false;
    return /^[a-zA-Z0-9_.-]+$/.test(name) && !name.includes('..');
};

/**
 * Checks if a string is free from script tags.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is free from script tags, false otherwise.
 */
export const isScriptFree = (str) => {
    if (typeof str !== 'string') return false;
    return !/<\s*script/gi.test(str);
};

/**
 * Checks if a string is a valid MIME type.
 *
 * @param {string} type - The string to check.
 * @returns {boolean} True if the string is a valid MIME type, false otherwise.
 */
export const isMimeType = (type) => {
    return typeof type === 'string' && /^[\w-]+\/[\w+.-]+$/.test(type);
};

/**
 * Checks if a string is a strong password.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a strong password, false otherwise.
 */
export const isStrongPassword = (str) => {
    if (typeof str !== 'string') return false;
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
};

/**
 * Checks if a string is a valid email address.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if the email address is valid, false otherwise.
 */
export const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

/**
 * Checks if a string is a valid phone number.
 *
 * @param {string} phone - The phone number to check.
 * @returns {boolean} True if the phone number is valid, false otherwise.
 */
export const isValidPhoneNumber = (phone) => {
    if (typeof phone !== 'string') return false;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    return phonePattern.test(phone);
};

/**
 * Checks if a string is a valid URL.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL is valid, false otherwise.
 */
export const isValidURL = (url) => {
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
export const isValidHexColor = (color) => {
    if (typeof color !== 'string') return false;
    const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexPattern.test(color);
};

/**
 * Checks if a string is a valid UUID.
 *
 * @param {string} uuid - The UUID to check.
 * @returns {boolean} True if the UUID is valid, false otherwise.
 */
export const isValidUUID = (uuid) => {
    if (typeof uuid !== 'string') return false;
    const uuidPattern =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidPattern.test(uuid);
};

/**
 * Checks if a string is a valid date in the format YYYY-MM-DD.
 *
 * @param {string} date - The date to check.
 * @returns {boolean} True if the date is valid, false otherwise.
 */
export const isValidDate = (date) => {
    if (typeof date !== 'string') return false;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(date);
};

/**
 * Checks if a string is a valid time in the format HH:MM.
 *
 * @param {string} time - The time to check.
 * @returns {boolean} True if the time is valid, false otherwise.
 */
export const isValidTime = (time) => {
    if (typeof time !== 'string') return false;
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(time);
};
