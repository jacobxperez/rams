function each(callback) {
    if (callback && typeof callback == 'function') {
        var arr = this.selector;

        if (!Array.isArray(this.selector)) var arr = Array.from(this.selector);

        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i);
        }

        return this;
    }
}

function eachOf(callback) {
    if (callback && typeof callback == 'function') {
        for (const item of this.selector) {
            callback(item);
        }

        return this;
    }
}

export {each, eachOf};
