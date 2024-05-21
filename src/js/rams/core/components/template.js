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
    _parse(string, templateSelector, targetSelector) {
        const parser = new DOMParser();
        const parsedSource = parser.parseFromString(string, 'text/html');
        this._append(parsedSource, templateSelector, targetSelector);
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
            .then(() => {
                rams.callback(callback);
            })
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
            .then(() => {
                rams.callback(callback);
            })
            .catch((err) => console.error(err, 'Error: Template not found'));

        return this;
    },
    fetch(url, templateSelector, targetSelector, callback = null) {
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                this._parse(response, templateSelector, targetSelector);
            })
            .then(() => {
                rams.callback(callback);
            })
            .catch((err) => console.error(err, 'Error: Template not found'));

        return this;
    },
    removeAll() {
        const allTemplates = document.querySelectorAll('template');
        allTemplates.forEach((template) => {
            template.remove();
        });

        return this;
    },
};
