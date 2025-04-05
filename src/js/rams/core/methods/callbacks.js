export function callback(callback) {
    if (typeof callback !== 'function') {
        console.error('[RAMS] callback: Callback must be a function.');
        return false;
    }

    callback();
}
