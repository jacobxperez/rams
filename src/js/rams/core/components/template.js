import {isFunction} from '../validators/standard.js';

export const template = {
    /**
     * Inserts a string of HTML into a target element.
     *
     * @param {string} string - The HTML string to insert.
     * @param {string} targetSelector - The CSS selector of the target element.
     */
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

    /**
     * Appends a template from a source element to a target element.
     *
     * @param {Document|HTMLElement} sourceElement - The source element containing the template.
     * @param {string} templateSelector - The CSS selector of the template to append.
     * @param {string} targetSelector - The CSS selector of the target element.
     */
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

    /**
     * Parses a string into a DOM Document.
     *
     * @param {string} string - The string to parse.
     * @param {string} [mimeType='text/html'] - The MIME type to use for parsing.
     * @returns {Document|null} The parsed document, or null if parsing failed.
     */
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

    /**
     * Creates a template element and appends it to a parent element.
     *
     * @param {string} html - The HTML string to use as the template content.
     * @param {string} id - The ID to assign to the template element.
     * @param {string} [parentSelector='body'] - The CSS selector of the parent element.
     * @returns {HTMLTemplateElement|null} The created template element, or null if creation failed.
     */
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

    /**
     * Asynchronously inserts a string of HTML into a target element.
     *
     * @param {string} string - The HTML string to insert.
     * @param {string} targetSelector - The CSS selector of the target element.
     * @param {Function|null} [callback=null] - Optional callback function to execute after insertion.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
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
            if (isFunction(callback, 'template.string')) {
                callback();
            }
        } catch (err) {
            return console.error(err);
        }
    },

    /**
     * Asynchronously appends a template from the document to a target element.
     *
     * @param {string} templateSelector - The CSS selector of the template to append.
     * @param {string} targetSelector - The CSS selector of the target element.
     * @param {Function|null} [callback=null] - Optional callback function to execute after appending.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
    async append(templateSelector, targetSelector, callback = null) {
        try {
            await new Promise((resolve, reject) => {
                if (!templateSelector)
                    reject('Error: Template selector is required.');
                resolve();
            });
            this._append(document, templateSelector, targetSelector);
            targetSelector;
            if (isFunction(callback, 'template.append')) {
                callback();
            }
        } catch (err) {
            return console.error(err);
        }
    },

    /**
     * Fetches an HTML document from a URL and optionally appends templates to the document body.
     *
     * @param {string} url - The URL to fetch the HTML document from.
     * @param {string|null} [templateSelector=null] - Optional CSS selector of a specific template to append.
     * @returns {Promise<void>} A promise that resolves when the operation is complete.
     */
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

    /**
     * Removes all <template> elements from the document.
     */
    removeAll() {
        document
            .querySelectorAll('template')
            .forEach((template) => template.remove());
    },
};
