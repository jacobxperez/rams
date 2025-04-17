export function createEffect(fn, options = {}) {
    const deps = new Set();
    const cleanupFns = [];

    const rerun = () => {
        // Unsubscribe from old deps
        for (const dep of deps) dep._effectListeners?.delete(rerun);
        deps.clear();

        // Set tracking context
        currentEffect = {deps};
        const cleanup = fn(); // optional return value: cleanup
        currentEffect = null;

        // Subscribe to new deps
        for (const dep of deps) {
            if (!dep._effectListeners) dep._effectListeners = new Set();
            dep._effectListeners.add(rerun);
        }

        // Handle cleanup
        cleanupFns.forEach((fn) => fn());
        cleanupFns.length = 0;
        if (typeof cleanup === 'function') cleanupFns.push(cleanup);
    };

    if (!options.lazy) rerun();

    return {
        stop() {
            for (const dep of deps) dep._effectListeners?.delete(rerun);
            cleanupFns.forEach((fn) => fn());
        },
    };
}
