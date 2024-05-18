class TemplateGenerator {
    constructor() {}
    #appendString(string, targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        targetElement.insertAdjacentHTML('beforeend', string);
    }
    #appendTemplate(sourceElement, templateSelector, targetSelector) {
        const sourceTemplate = sourceElement.querySelector(templateSelector);
        const clonedTemplate = sourceTemplate.content.cloneNode(true);
        const targetElement = document.querySelector(targetSelector);
        targetElement.appendChild(clonedTemplate);
        // sourceTemplate.remove();
    }
    #parseTemplate(string, templateSelector, targetSelector) {
        const parser = new DOMParser();
        const parsedSource = parser.parseFromString(string, 'text/html');
        this.#appendTemplate(parsedSource, templateSelector, targetSelector);
    }
    newTemplate(html, id) {
        const newTemplate = document.createElement('template');
        newTemplate.innerHTML = html.trim();
        newTemplate.content.firstElementChild;
        newTemplate.setAttribute('id', id);
        document.body.appendChild(newTemplate);
        return this;
    }
    setTemplate(templateSelector, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            templateSelector ? resolve() : reject();
        })
            .then(() =>
                this.#appendTemplate(document, templateSelector, targetSelector)
            )
            .then(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch((err) => console.error(err, 'Error: Template not found'));

        return this;
    }
    fromString(string, targetSelector, callback = null) {
        new Promise((resolve, reject) => {
            typeof string === 'string'
                ? resolve()
                : reject((err = 'Error: Source is not a String'));
        })
            .then(() => this.#appendString(string, targetSelector))
            .then(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch((err) => console.error(err));

        return this;
    }
    fetchTemplate(templateSelector, targetSelector, url, callback = null) {
        (async () => {
            try {
                let response = await fetch(url);
                let fetchURL = await response.text();
                this.#parseTemplate(fetchURL, templateSelector, targetSelector);
                if (typeof callback === 'function') {
                    callback();
                }
            } catch (err) {
                console.error(err, 'Error: Template not found');
            }
        })();

        return this;
    }
    removeTemplates() {
        const allTemplates = document.querySelectorAll('template');
        allTemplates.forEach((template) => {
            template.remove();
        });
    }
}

const templateGenerator = new TemplateGenerator();

export {templateGenerator};
