/* @license
 * Jacob Perez <https://jacobxperez.github.io/blog/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {sidebar} from './modules/sidebar.js';
import {rams} from '../../js/rams/rams.js';

if (meta.title === '') {
    meta.title = `<h1>Rams</h1>`;
} else {
    meta.title = `<h1>${meta.title}</h1>`;
}

let header = `
        <div id="header" data-container>
            ${meta.title}
        </div>
        `;

let main = `
        <div data-container data-grid="span-all">
            <aside id="aside" data-column="large-3 medium-3 small-4"></aside>
            <article id="content" data-column="large-9 medium-9 small-4"></article>
        </div>
        `;

if (meta.type === 'fullPage') {
    main = `
        <div id="content" data-container data-grid="span-all"></div>
        `;
}

// check and set template url for localhost or for public url
let templateURL;
location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? (templateURL = window.location.origin + '/templates/main.347099b8.html')
    : (templateURL =
          window.location.origin + '/rams/templates/main.330b1356.html');

// create main layout
let layout = `
        <header data-section="header">
            ${header}
        </header>
        <main data-section="main">
            ${main}
        </main>
        `;

// parse everything together
templateGenerator
    .fetchTemplate('#navTemplate', '#root', templateURL)
    .fromString(layout, '#root')
    .setTemplate('#headerTemplate', '#header')
    .setTemplate('#contentTemplate', '#content', sidebar)
    .fetchTemplate('#footerTemplate', '#root', templateURL);

rams.toggle();
