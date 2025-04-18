export class ErrorManager {
    constructor() {
        this.errors = new Map(); // key -> lastError
        this.listeners = new Set();
    }

    add(manager) {
        const key = manager.label || manager.key || `field-${this.errors.size}`;

        // Listen for changes to the manager's error state
        const unsubscribe = manager.onError((error) => {
            if (error) {
                this.errors.set(key, error);
            } else {
                this.errors.delete(key);
            }
            this.emit();
        });

        // Store unsubscribe if you want remove(key) later
        manager._errorUnsubscribe = unsubscribe;

        // Set current state if already errored
        if (manager.getError()) {
            this.errors.set(key, manager.getError());
        }

        this.emit();
    }

    getErrors() {
        return Object.fromEntries(this.errors);
    }

    getErrorList() {
        return Array.from(this.errors.values());
    }

    onChange(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    emit() {
        for (const listener of this.listeners) listener(this.getErrors());
    }

    clear() {
        this.errors.clear();
        this.emit();
    }

    remove(key) {
        if (this.errors.has(key)) {
            const manager = this.errors.get(key);
            if (manager && manager._errorUnsubscribe) {
                manager._errorUnsubscribe();
            }
            this.errors.delete(key);
            this.emit();
        }
    }

    hasErrors() {
        return this.errors.size > 0;
    }

    count() {
        return this.errors.size;
    }
}
