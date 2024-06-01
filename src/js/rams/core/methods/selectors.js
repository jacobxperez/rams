function queryDataAttr() {
    Node.prototype.queryDataAttr = function (dataName, value) {
        if (value) {
            return this.querySelector(`[data-${dataName}="${value}"]`);
        } else {
            return this.querySelector(`[data-${dataName}]`);
        }
    };
}

function queryDataAttrAll() {
    Node.prototype.queryDataAttrAll = function (dataName, value) {
        if (value) {
            return this.querySelectorAll(`[data-${dataName}="${value}"]`);
        } else {
            return this.querySelectorAll(`[data-${dataName}]`);
        }
    };
}

export {queryDataAttr, queryDataAttrAll};
