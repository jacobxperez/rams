function each(callback) {
    if (callback && typeof callback == 'function') {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i);
        }
    }

    return this;
}

function eachOf(callback) {
    if (callback && typeof callback == 'function') {
        for (const item of this) {
            callback(item);
        }
    }

    return this;
}

function eachIn(callback) {
    if (callback && typeof callback == 'function') {
        for (const property in object) {
            callback(property);
        }
    }

    return this;
}

export {each, eachOf, eachIn};
