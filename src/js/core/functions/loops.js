function each(callback) {
    if (callback && typeof callback == 'function') {
        var arr = this.selector;

        if (!Array.isArray(this.selector))
            var arr = Array.from(this.selector);

        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i);
        }

        // for (const element of this.selector) {
        //     callback(selector);
        // }

        return this;
    }
}

export {each};
