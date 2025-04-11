import {effect, untrack} from '../signals/signal.js';
import {bindDOM} from './bind.js';
import {bindEvents as bindEvt} from './events.js';

export function bindFor(root = document.body, context = {}) {
    const templates = root.querySelectorAll('template[data-for]');

    templates.forEach((template) => {
        const [itemName, listKey] = template
            .getAttribute('data-for')
            .split(' in ')
            .map((s) => s.trim());

        const listSignal = context[listKey];
        if (!listSignal) return;

        const parent = template.parentNode;
        const marker = document.createComment(`data-for:${itemName}`);
        parent.insertBefore(marker, template);
        template.remove();

        let currentNodes = [];

        effect(() => {
            const list = untrack(() => listSignal());
            const newNodes = [];

            // Clean up previous nodes
            currentNodes.forEach((entry) => {
                entry.nodes.forEach((n) => n.remove());
            });
            currentNodes = [];

            list.forEach((item, index) => {
                const clone = document.importNode(template.content, true);
                const fragment = clone;
                const nodes = Array.from(fragment.childNodes);

                const itemContext = {
                    ...context,
                    [itemName]: () => item,
                    [`${itemName}Index`]: () => index,
                };

                // Bind signals and events in the fragment
                bindDOM(fragment, itemContext);
                bindEvt(fragment, itemContext);

                parent.insertBefore(fragment, marker);
                currentNodes.push({item, nodes});
            });
        });
    });
}
