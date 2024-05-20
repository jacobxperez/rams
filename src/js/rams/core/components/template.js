export const template = {
    _appendString(string, targetSelector) {
        const stringTrim = string.trim();
        const targetElement = document.querySelector(targetSelector);
        targetElement.insertAdjacentHTML('beforeend', stringTrim);
    },
    _appendTemplate(sourceElement, templateSelector, targetSelector) {
        const sourceTemplate = sourceElement.querySelector(templateSelector);
        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        targetElement.appendChild(clonedTemplate);
    },
    _parseTemplate(string, templateSelector, targetSelector) {
        const parser = new DOMParser();
        const parsedSource = parser.parseFromString(string, 'text/html');
        this._appendTemplate(parsedSource, templateSelector, targetSelector);
    },
    createTemplate(html, id) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        template.content.firstElementChild;
        template.setAttribute('id', id);
        document.body.appendChild(template);
        return this;
    },
    appendString(string, targetSelector, callback = null) {
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
    appendTemplate(templateSelector, targetSelector, callback = null) {
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
    fetchTemplate(url, templateSelector, targetSelector, callback = null) {
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                this._parseTemplate(response, templateSelector, targetSelector);
            })
            .then(() => {
                if (typeof callback === 'function') {
                    callback();
                }
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
