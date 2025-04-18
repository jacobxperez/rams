export class ErrorManager {
    constructor() {
        this.errors = new Map(); // key -> error object
        this.listeners = new Set();
    }

    // Add or update an error
    setError(key, error) {
        if (!error) {
            this.errors.delete(key);
        } else {
            this.errors.set(key, error);
        }
        this.emit();
    }

    // Get error for a specific key
    getError(key) {
        return this.errors.get(key) || null;
    }

    // Get full error report
    getAllErrors() {
        const report = {};
        for (const [key, error] of this.errors.entries()) {
            report[key] = error;
        }
        return Object.keys(report).length ? report : null;
    }

    // Reset all errors
    clearAll() {
        this.errors.clear();
        this.emit();
    }

    // Subscribe to changes
    onChange(fn) {
        if (typeof fn === 'function') this.listeners.add(fn);
        return () => this.listeners.delete(fn);
    }

    emit() {
        for (const fn of this.listeners) fn(this.getAllErrors());
    }
}
