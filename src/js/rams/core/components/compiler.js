export function compiler(input) {
    const lines = input.trim().split('\n');
    const html = [];
    const indentStack = [0]; // for nested indentation support

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        const indent = line.match(/^\s*/)[0].length;

        // Adjust stack if indent decreases
        while (indent < indentStack[indentStack.length - 1]) {
            html.push('</div>');
            indentStack.pop();
        }

        // Match directives
        if (trimmed.startsWith('when ')) {
            const condition = trimmed.slice(5);
            html.push(`<div data-if="${condition}">`);
            indentStack.push(indent + 2);
            continue;
        }

        if (trimmed === 'else') {
            html.push(`<div data-else>`);
            indentStack.push(indent + 2);
            continue;
        }

        if (trimmed.startsWith('each ')) {
            const match = trimmed.match(/^each\s+(\w+)\s+in\s+(.+)/);
            if (match) {
                const [, item, list] = match;
                html.push(`<div data-for="${item} in ${list}">`);
                indentStack.push(indent + 2);
                continue;
            }
        }

        // Match tag + optional event + optional class + text
        const tagMatch = trimmed.match(
            /^(\w+)(\([^)]+\))?(\.\w+)?\s*(?:"(.+)"|')?/
        );
        if (tagMatch) {
            let [, tag, event, className, text] = tagMatch;

            let attrs = [];
            if (event) {
                const eventMatch = event.match(/\((\w+)\)="(.+?)"/);
                if (eventMatch) {
                    const [, evt, handler] = eventMatch;
                    attrs.push(`data-${evt}="${handler}"`);
                }
            }

            if (className) {
                attrs.push(`class="${className.slice(1)}"`);
            }

            const content = text
                ? `>${text.replace(/\{(.+?)\}/g, '{{$1}}')}</${tag}>`
                : `></${tag}>`;
            html.push(`<${tag} ${attrs.join(' ')}${content}`);
        }
    }

    // Close remaining open divs
    while (indentStack.length > 1) {
        html.push('</div>');
        indentStack.pop();
    }

    return html.join('\n');
}
