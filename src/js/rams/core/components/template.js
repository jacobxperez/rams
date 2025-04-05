import {r} from '../../RAMS.js';

export const template = {
    _string(string, targetSelector) {
        const stringTrim = string.trim();
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) {
            console.error(
                `Error: Target element "${targetSelector}" not found.`
            );
            return;
        }
        targetElement.insertAdjacentHTML('beforeend', stringTrim);
    },

    _append(sourceElement, templateSelector, targetSelector) {
        if (!sourceElement || !templateSelector || !targetSelector) {
            console.error(`Error: Invalid arguments in _append().`);
            return;
        }

        const sourceTemplate = sourceElement.querySelector(templateSelector);
        if (!sourceTemplate) {
            console.error(`Error: Template "${templateSelector}" not found.`);
            return;
        }

        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) {
            console.error(
                `Error: Target element "${targetSelector}" not found.`
            );
            return;
        }

        targetElement.appendChild(clonedTemplate);
    },

    parser(string, mimeType = 'text/html') {
        try {
            const parser = new DOMParser();
            const parsedDoc = parser.parseFromString(string, mimeType);
            if (!parsedDoc)
                throw new Error('Parsing resulted in a null document.');
            return parsedDoc;
        } catch (err) {
            console.error(`Error parsing string: ${err.message}`);
            return null;
        }
    },

    create(html, id, parentSelector = 'body') {
        if (typeof html !== 'string' || !id) {
            console.error('Error: Invalid HTML string or missing ID.');
            return null;
        }

        const template = document.createElement('template');
        template.innerHTML = html.trim();
        template.setAttribute('id', id);

        const parent = document.querySelector(parentSelector);
        if (!parent) {
            console.error(
                `Error: Parent element "${parentSelector}" not found.`
            );
            return null;
        }

        parent.appendChild(template);
        return template;
    },

    async string(string, targetSelector, callback = null) {
        try {
            await new Promise((resolve, reject) => {
                if (typeof string !== 'string') {
                    reject('Error: Source is not a string.');
                } else {
                    resolve();
                }
            });
            this._string(string, targetSelector);
            targetSelector;
            return r.callback?.(callback);
        } catch (err) {
            return console.error(err);
        }
    },

    async append(templateSelector, targetSelector, callback = null) {
        try {
            await new Promise((resolve, reject) => {
                if (!templateSelector)
                    reject('Error: Template selector is required.');
                resolve();
            });
            this._append(document, templateSelector, targetSelector);
            targetSelector;
            return r.callback?.(callback);
        } catch (err) {
            return console.error(err);
        }
    },

    async fetch(url, templateSelector = null) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

            const responseText = await response.text();
            const parsed = this.parser(responseText);
            if (!parsed) return;

            if (templateSelector) {
                const template = parsed.querySelector(templateSelector);
                if (template && !document.getElementById(template.id)) {
                    document.body.appendChild(template);
                } else {
                    console.warn(
                        `Warning: No new template found for "${templateSelector}".`
                    );
                }
            } else {
                parsed.querySelectorAll('template').forEach((template) => {
                    if (!document.getElementById(template.id)) {
                        document.body.appendChild(template);
                    }
                });
            }
        } catch (err) {
            console.error(`Fetch error: ${err.message}`);
        }
    },

    removeAll() {
        document
            .querySelectorAll('template')
            .forEach((template) => template.remove());
    },
};
