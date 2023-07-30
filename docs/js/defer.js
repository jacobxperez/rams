/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {sidebar} from './modules/sidebar.js';
import {rams} from '../../src/js/rams/rams.js';

if (meta.title === '') {
    meta.title = `<h1>Rams</h1>`;
} else {
    meta.title = `<h1>${meta.title}</h1>`;
}

let nav = `
    <nav id="nav" data-navbar="top"></nav>
    `;

let header = `
        <div id="header" data-container="fit">
            ${meta.title}
        </div>
        `;

let main = `
        <div data-container="fit" data-grid="main">
            <aside id="aside"></aside>
            <article id="content"></article>
        </div>
        `;

if (meta.type === 'fullPage') {
    main = `
        <div id="content" data-container="fit" data-grid="main"></div>
        `;
}

let footer = `
    <footer data-section="footer">
        <div id="footer" data-container="fit">
        </div>
    </footer>
    `;

// check and set template url for localhost or for public url
let templateURL;
location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? (templateURL = window.location.origin + '/templates/a.be13ff7e.html')
    : (templateURL =
          window.location.origin + '/rams/templates/a.e67a1128.html');

// create main layout
let layout = `
        ${nav}
        <header data-section="header">
            ${header}
        </header>
        <main data-section="main">
            ${main}
        </main>
        ${footer}
        `;

// parse everything together
template
    .fromString(layout, 'body')
    .setTemplate('#headerTemplate', '#header')
    .setTemplate('#contentTemplate', '#content', sidebar)
    .fetchTemplate(templateURL, '#nav')
    .fetchTemplate(templateURL, '#footer');

rams.toggle();
// .carousel()
// .addControls()
// .addIndicators()
// .addTouchControls()
// .addKeyboardControls();
