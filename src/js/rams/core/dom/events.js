export function bindEvents(root = document.body, handlers = {}) {
    const elements = root.querySelectorAll('[data-on]');

    elements.forEach((el) => {
        const actions = el.getAttribute('data-on').split(';');

        actions.forEach((action) => {
            const [eventWithMods, fnName] = action
                .split(':')
                .map((s) => s.trim());
            if (!fnName) return;

            const parts = eventWithMods.split('.');
            const eventName = parts[0];
            const modifiers = new Set(parts.slice(1));
            const fn = handlers[fnName];

            if (!fn) return;

            const options =
                modifiers.has('once') || modifiers.has('capture')
                    ? {
                          once: modifiers.has('once'),
                          capture: modifiers.has('capture'),
                      }
                    : false;

            const wrappedHandler = (e) => {
                if (modifiers.has('prevent')) e.preventDefault();
                if (modifiers.has('stop')) e.stopPropagation();
                if (modifiers.has('self') && e.target !== el) return;
                fn(e);
            };

            el.addEventListener(eventName, wrappedHandler, options);
        });
    });
}
