function each(callback) {
    if (callback && typeof callback == 'function') {
        for (let i = 0; i < this.selector.length; i++) {
            callback(this.selector[i], i);
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
