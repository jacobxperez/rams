function callback(callback) {
    if (typeof callback === 'function') {
        callback();
    }
}

export {callback};
