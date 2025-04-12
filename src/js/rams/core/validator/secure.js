export const isBase64 = (str) => {
    return typeof str === 'string' && /^[A-Za-z0-9+/]+={0,2}$/.test(str.trim());
};

export const isJWT = (str) => {
    return (
        typeof str === 'string' &&
        /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(str)
    );
};

export const isSafeString = (str) => {
    if (typeof str !== 'string') return false;
    const unsafePattern = /[<>/"'`;(){}[\]]/;
    return !unsafePattern.test(str);
};

export const isSafeSQL = (str) => {
    if (typeof str !== 'string') return false;
    const injectionPattern = /(\b(SELECT|UPDATE|DELETE|INSERT|DROP|--|;)\b)/i;
    return !injectionPattern.test(str);
};

export const isSafeFilename = (name) => {
    if (typeof name !== 'string') return false;
    return /^[a-zA-Z0-9_.-]+$/.test(name) && !name.includes('..');
};

export const isScriptFree = (str) => {
    if (typeof str !== 'string') return false;
    return !/<\s*script/gi.test(str);
};

export const isMimeType = (type) => {
    return typeof type === 'string' && /^[\w-]+\/[\w+.-]+$/.test(type);
};

export const isStrongPassword = (str) => {
    if (typeof str !== 'string') return false;
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(str);
};

export const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export const isValidPhoneNumber = (phone) => {
    if (typeof phone !== 'string') return false;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    return phonePattern.test(phone);
};

export const isValidURL = (url) => {
    if (typeof url !== 'string') return false;
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};
