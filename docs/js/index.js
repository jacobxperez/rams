/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
const meta = {
    type: '',
    title: document.title,
    subtitle: '',
    author: {
        name: '',
        url: '',
    },
    date: {
        published: '',
        revised: '',
    },
    set authorName(name) {
        this.author.name = name;
    },
    get authorName() {
        return this.author.name;
    },
    set authorUrl(url) {
        this.author.url = url;
    },
    get authorUrl() {
        return this.author.url;
    },
    set datePublished(date) {
        this.date.published = date;
    },
    get datePublished() {
        return this.date.published;
    },
    set dateRevised(date) {
        this.date.revised = date;
    },
    get dateRevised() {
        return this.date.revised;
    },
};

const template = {
    appendString(string, targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        targetElement.insertAdjacentHTML('beforeend', string);
    },
    appendTemplate(sourceElement, templateSelector, targetSelector) {
        const sourceTemplate = sourceElement.querySelector(templateSelector);
        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        targetElement.appendChild(clonedTemplate);
        sourceTemplate.remove();
    },
    parseTemplate(string, templateSelector, targetSelector) {
        const parser = new DOMParser();
        const parsedSource = parser.parseFromString(string, 'text/html');
        this.appendTemplate(parsedSource, templateSelector, targetSelector);
    },
    setTemplate(templateSelector, targetSelector, callback = null) {
        if (!templateSelector) {
            console.error('Error: Template not found');
            return this;
        }

        this.appendTemplate(document, templateSelector, targetSelector);

        if (typeof callback === 'function') {
            callback();
        }

        return this;
    },
    fromString(string, targetSelector, callback = null) {
        if (typeof string !== 'string') {
            console.error('Error: Source is not a string');
            return this;
        }

        this.appendString(string, targetSelector);

        if (typeof callback === 'function') {
            callback();
        }

        return this;
    },
    fetchTemplate(url, targetSelector, callback = null) {
        (async () => {
            try {
                let response = await fetch(url);
                let fetchURL = await response.text();
                this.parseTemplate(fetchURL, targetSelector, targetSelector);
                if (typeof callback === 'function') {
                    callback();
                }
            } catch (err) {
                console.error(err, 'Error: Template not found');
            }
        })();

        return this;
    },
};
