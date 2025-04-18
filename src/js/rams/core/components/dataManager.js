export class DataManager {
    constructor(validate, initialValue, options = {}) {
        this.validate = Array.isArray(validate) ? validate : [validate];
        this.initialValue = initialValue;
        this.value = null;
        this.pending = false;
        this.lastError = null;
        this.label = options.label || 'Value';

        this.listeners = new Set();
        this.errorListeners = new Set();
        this._currentEffectContext = null; // for RAMS reactivity

        if (arguments.length >= 2) {
            this.set(initialValue);
        }
    }

    setEffectContext(context) {
        this._currentEffectContext = context;
    }

    get() {
        if (this._currentEffectContext) {
            this._currentEffectContext.deps.add(this);
        }
        return this.value;
    }

    async runValidation(value) {
        for (const validator of this.validate) {
            const type = typeof validator === 'string' ? 'type' : 'custom';
            const source =
                typeof validator === 'function'
                    ? validator.name || 'anonymous'
                    : validator;

            try {
                if (type === 'type') {
                    if (typeof value !== validator) {
                        throw new TypeError(
                            `${this.label} must be of type '${validator}', got '${typeof value}'`
                        );
                    }
                } else {
                    const result = validator(value);
                    const resolved =
                        result instanceof Promise ? await result : result;

                    if (resolved !== true && resolved !== undefined) {
                        const msg =
                            typeof resolved === 'string'
                                ? `${this.label} ${resolved}`
                                : `${this.label} failed validation`;
                        throw new TypeError(msg);
                    }
                }
            } catch (err) {
                this.lastError = {
                    message: err.message,
                    type,
                    source,
                    value,
                    timestamp: Date.now(),
                };
                this.emitError(this.lastError);
                throw err;
            }
        }

        return value;
    }

    set(newValue) {
        this.lastError = null;
        this.pending = true;

        const isAsyncValidation = this.validate.some((validator) => {
            if (typeof validator !== 'function') return false;
            try {
                const result = validator(newValue);
                return result instanceof Promise;
            } catch {
                return false;
            }
        });

        if (isAsyncValidation) {
            return this._setAsync(newValue);
        }

        try {
            for (const validator of this.validate) {
                const type = typeof validator === 'string' ? 'type' : 'custom';
                if (type === 'type') {
                    if (typeof newValue !== validator) {
                        throw new TypeError(
                            `${this.label} must be of type '${validator}', got '${typeof newValue}'`
                        );
                    }
                } else {
                    const result = validator(newValue);
                    if (result !== true && result !== undefined) {
                        const msg =
                            typeof result === 'string'
                                ? `${this.label} ${result}`
                                : `${this.label} failed validation`;
                        throw new TypeError(msg);
                    }
                }
            }

            this.value = newValue;
            this.pending = false;
            this.emit(newValue);
            return true;
        } catch (err) {
            this.pending = false;
            this.lastError = {
                message: err.message,
                type: typeof validator === 'string' ? 'type' : 'custom',
                source: validator,
                value: newValue,
                timestamp: Date.now(),
            };
            this.emitError(this.lastError);
            throw err;
        }
    }

    async _setAsync(newValue) {
        this.pending = true;
        this.lastError = null;

        return this.runValidation(newValue)
            .then((valid) => {
                this.value = valid;
                this.pending = false;
                this.emit(valid);
                return true;
            })
            .catch((err) => {
                this.pending = false;
                console.error('[DataManager]', err.message);
                throw err;
            });
    }

    async validate() {
        this.pending = true;
        this.lastError = null;

        try {
            await this.runValidation(this.value);
            this.pending = false;
            return true;
        } catch {
            this.pending = false;
            return false;
        }
    }

    freeze() {
        if (this.value !== null && typeof this.value === 'object') {
            this.value = freezeDeep(this.value);
        }
        return this;
    }

    unfreeze() {
        if (this.value !== null && typeof this.value === 'object') {
            this.value = unfreezeDeep(this.value);
        }
        return this;
    }

    getError() {
        return this.lastError;
    }

    getErrorReport() {
        if (!this.lastError) return null;

        const {message, type, source, value, timestamp} = this.lastError;
        return {
            label: this.label,
            message,
            type,
            source,
            value,
            timestamp: new Date(timestamp).toLocaleString(),
            rawTimestamp: timestamp,
        };
    }

    isValid() {
        return this.lastError === null;
    }

    isPending() {
        return this.pending;
    }

    isDirty() {
        return this.value !== this.initialValue;
    }

    reset() {
        this.set(this.initialValue);
    }

    onChange(fn) {
        if (typeof fn === 'function') this.listeners.add(fn);
        return () => this.listeners.delete(fn);
    }

    onError(fn) {
        if (typeof fn === 'function') this.errorListeners.add(fn);
        return () => this.errorListeners.delete(fn);
    }

    emit(value) {
        this.listeners.forEach((fn) => fn(value));
        if (this._effectListeners) {
            for (const fn of this._effectListeners) fn();
        }
    }

    emitError(error) {
        this.errorListeners.forEach((fn) => fn(error));
    }
}
