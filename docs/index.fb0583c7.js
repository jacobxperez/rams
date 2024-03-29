/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2024 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
const meta = {type: '', title: document.title, subtitle: ''},
    templateGenerator = {
        appendString(e, t) {
            document.querySelector(t).insertAdjacentHTML('beforeend', e);
        },
        appendTemplate(e, t, n) {
            const r = e.querySelector(t).content.cloneNode(!0);
            document.querySelector(n).appendChild(r);
        },
        parseTemplate(e, t, n) {
            const r = new DOMParser().parseFromString(e, 'text/html');
            this.appendTemplate(r, t, n);
        },
        newTemplate(e, t) {
            const n = document.createElement('template');
            return (
                (n.innerHTML = e.trim()),
                n.content.firstElementChild,
                n.setAttribute('id', t),
                document.body.appendChild(n),
                this
            );
        },
        setTemplate(e, t, n = null) {
            return (
                new Promise((t, n) => {
                    e ? t() : n();
                })
                    .then(() => this.appendTemplate(document, e, t))
                    .then(() => {
                        'function' == typeof n && n();
                    })
                    .catch((e) =>
                        console.error(e, 'Error: Template not found')
                    ),
                this
            );
        },
        fromString(e, t, n = null) {
            return (
                new Promise((t, n) => {
                    'string' == typeof e
                        ? t()
                        : n((err = 'Error: Source is not a String'));
                })
                    .then(() => this.appendString(e, t))
                    .then(() => {
                        'function' == typeof n && n();
                    })
                    .catch((e) => console.error(e)),
                this
            );
        },
        fetchTemplate(e, t, n, r = null) {
            return (
                (async () => {
                    try {
                        let o = await fetch(n),
                            a = await o.text();
                        this.parseTemplate(a, e, t),
                            'function' == typeof r && r();
                    } catch (e) {
                        console.error(e, 'Error: Template not found');
                    }
                })(),
                this
            );
        },
    };
