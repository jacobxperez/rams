import {rams} from '../../index.js';

export const template = {
    _string(string, targetSelector) {
        const stringTrim = string.trim();
        const targetElement = document.querySelector(targetSelector);
        targetElement.insertAdjacentHTML('beforeend', stringTrim);
    },
    _append(sourceElement, templateSelector, targetSelector) {
        const sourceTemplate = sourceElement.querySelector(templateSelector);
        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        targetElement.appendChild(clonedTemplate);
    },
    parser(string, mimeType = 'text/html') {
        // The string to be parsed. It must contain either an HTML, xml, XHTML, or svg document.
        const parser = new DOMParser();
        return parser.parseFromString(string, mimeType);
    },
    create(html, id) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        template.content.firstElementChild;
        template.setAttribute('id', id);
        document.body.appendChild(template);
        return this;
    },
    string(string, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            typeof string === 'string'
                ? resolve()
                : reject((err = 'Error: Source is not a String'));
        })
            .then(() => this._string(string, targetSelector))
            .then(() => rams.callback(callback))
            .catch((err) => console.error(err));

        return this;
    },
    append(templateSelector, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            templateSelector ? resolve() : reject();
        })
            .then(() =>
                this._append(document, templateSelector, targetSelector)
            )
            .then(() => rams.callback(callback))
            .catch((err) => console.error(err, 'Error: Template not found'));

        return this;
    },
    fetch(url, templateSelector = null) {
        return fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                const parsed = this.parser(response);
                if (typeof templateSelector === 'string') {
                    const template = parsed.querySelector(templateSelector);
                    document.body.appendChild(template);
                } else {
                    const templates = parsed.querySelectorAll('template');
                    templates.forEach((template) => {
                        document.body.appendChild(template);
                    });
                }
            })
            .catch((err) => console.error(err, 'Error: Template not found'));
    },
    removeAll() {
        // removes all template elements to keep document clean
        const templates = document.querySelectorAll('template');
        templates.forEach((template) => {
            template.remove();
        });

        return this;
    },
};
