export function freezeDeep(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.freeze(obj);
        for (const key of Object.keys(obj)) {
            freezeDeep(obj[key]);
        }
    }
    return obj;
}

export function unfreezeDeep(obj) {
    if (Array.isArray(obj)) {
        return obj.map(unfreezeDeep);
    } else if (obj && typeof obj === 'object') {
        const clone = {};
        for (const key of Object.keys(obj)) {
            clone[key] = unfreezeDeep(obj[key]);
        }
        return clone;
    }
    return obj;
}
