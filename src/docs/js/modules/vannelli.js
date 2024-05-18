/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2024 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {Rams} from '../../../js/rams/index.js';

Rams.prototype.vannelli =  {
    _appendString(string, targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        targetElement.insertAdjacentHTML('beforeend', string);
    },
    _appendTemplate(sourceElement, templateSelector, targetSelector) {
        const sourceTemplate = sourceElement.querySelector(templateSelector);
        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        targetElement.appendChild(clonedTemplate);
        // sourceTemplate.remove();
    },
    _parseTemplate(string, templateSelector, targetSelector) {
        const parser = new DOMParser();
        const parsedSource = parser.parseFromString(string, 'text/html');
        this._appendTemplate(parsedSource, templateSelector, targetSelector);
    },
    newTemplate(html, id) {
        const newTemplate = document.createElement('template');
        newTemplate.innerHTML = html.trim();
        newTemplate.content.firstElementChild;
        newTemplate.setAttribute('id', id);
        document.body.appendChild(newTemplate);
        return this;
    },
    setTemplate(templateSelector, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            templateSelector ? resolve() : reject();
        })
            .then(() =>
                this._appendTemplate(document, templateSelector, targetSelector)
            )
            .then(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch((err) => console.error(err, 'Error: Template not found'));

        return this;
    },
    fromString(string, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            typeof string === 'string'
                ? resolve()
                : reject((err = 'Error: Source is not a String'));
        })
            .then(() => this._appendString(string, targetSelector))
            .then(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch((err) => console.error(err));

        return this;
    },
    fetchTemplate(templateSelector, targetSelector, url, callback = null) {
        (async () => {
            try {
                let response = await fetch(url);
                let fetchURL = await response.text();
                this._parseTemplate(fetchURL, templateSelector, targetSelector);
                if (typeof callback === 'function') {
                    callback();
                }
            } catch (err) {
                console.error(err, 'Error: Template not found');
            }
        })();

        return this;
    },
    removeTemplates() {
        const allTemplates = document.querySelectorAll('template');
        allTemplates.forEach((template) => {
            template.remove();
        });
    },
};

export {vannelli};
