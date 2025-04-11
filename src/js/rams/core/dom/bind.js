import {effect} from '../signals/signal.js';

export function bindDOM(root = document.body, context = {}) {
    const elements = root.querySelectorAll(
        '[data-bind], [data-if], [data-show]'
    );

    elements.forEach((el) => {
        // data-bind
        if (el.hasAttribute('data-bind')) {
            const bindings = el.getAttribute('data-bind').split(';');
            bindings.forEach((binding) => {
                const [type, key] = binding.split(':').map((s) => s.trim());
                const signal = context[key];
                if (!signal) return;

                effect(() => {
                    const value = signal();
                    applyBinding(el, type, value);
                });

                if (
                    type === 'value' &&
                    (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
                ) {
                    el.addEventListener('input', (e) => {
                        const [, set] = context[key];
                        set(e.target.value);
                    });
                }
            });
        }

        // data-if
        if (el.hasAttribute('data-if')) {
            const key = el.getAttribute('data-if').trim();
            const signal = context[key];
            if (!signal) return;

            const comment = document.createComment(`data-if:${key}`);
            const parent = el.parentNode;

            effect(() => {
                const value = signal();
                if (!value) {
                    if (el.parentNode) parent.replaceChild(comment, el);
                } else {
                    if (comment.parentNode) parent.replaceChild(el, comment);
                }
            });
        }

        // data-show
        if (el.hasAttribute('data-show')) {
            const key = el.getAttribute('data-show').trim();
            const signal = context[key];
            if (!signal) return;

            effect(() => {
                const value = signal();
                el.style.display = value ? '' : 'none';
            });
        }
    });
}

function applyBinding(el, type, value) {
    switch (type) {
        case 'text':
            el.textContent = value;
            break;
        case 'html':
            el.innerHTML = value;
            break;
        case 'value':
            el.value = value;
            break;
        default:
            if (type.startsWith('attr-')) {
                const attrName = type.slice(5);
                el.setAttribute(attrName, value);
            }
            break;
    }
}
