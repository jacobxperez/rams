export class ErrorManager {
    #handlers = [];
    #groupHandlers = new Map();
    #logs = [];

    log(error, context = {}) {
        const formatted = this.#formatError(error, context);
        this.#logs.push(formatted);

        for (const handler of this.#handlers) {
            handler(formatted);
        }

        const group = formatted.group;
        if (this.#groupHandlers.has(group)) {
            for (const handler of this.#groupHandlers.get(group)) {
                handler(formatted);
            }
        }
    }

    onError(fn) {
        if (typeof fn === 'function') {
            this.#handlers.push(fn);
        }
    }

    onErrorForGroup(group, fn) {
        if (typeof fn !== 'function') return;
        if (!this.#groupHandlers.has(group)) {
            this.#groupHandlers.set(group, []);
        }
        this.#groupHandlers.get(group).push(fn);
    }

    getLogs() {
        return [...this.#logs];
    }

    getLogsByGroup(group) {
        return this.#logs.filter((log) => log.group === group);
    }

    clearLogs() {
        this.#logs.length = 0;
    }

    #formatError(error, context) {
        return {
            message: error.message || String(error),
            stack: error.stack || null,
            context,
            group: context.group || 'general',
            timestamp: new Date().toISOString(),
        };
    }
}

export const errorManager = new ErrorManager();
