export function callback(callback) {
    if (typeof callback === 'function') {
        callback();
    }

    return this;
}
