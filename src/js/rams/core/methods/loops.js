function each(callback) {
    if (!Array.isArray(this)) {
        throw new TypeError('each can only be called on an array');
    }
    if (callback && typeof callback == 'function') {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i);
        }
    }
}

function eachOf(callback) {
    if (!(this && typeof this[Symbol.iterator] === 'function')) {
        throw new TypeError('eachOf can only be called on an iterable');
    }
    if (callback && typeof callback == 'function') {
        for (const item of this) {
            callback(item);
        }
    }
}

function eachIn(callback) {
    if (typeof this !== 'object' || this === null) {
        throw new TypeError('eachIn can only be called on an object');
    }
    if (callback && typeof callback == 'function') {
        for (const property in this) {
            callback(property);
        }
    }
}

export {each, eachOf, eachIn};
