/* @license
 * RAMS <https://jacobxperez.github.io/rams/>
 * Copyright (C) 2025 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
-----------------------------------------------------------------------------*/
import {rams} from '../../js/rams/RAMS.js';
import {sidebar} from './modules/sidebar.js';
import {template} from '../../js/rams/core/components/template.js';

/**
 * Initializes the RAMS application.
 *
 * This script sets up the document structure, dynamically loads templates,
 * and configures the sidebar navigation. It also handles toggling functionality.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Sets the meta title for the page.
     * If no title is provided, defaults to "RAMS".
     */
    if (meta.title === '') {
        meta.title = `<h1>RAMS</h1>`;
    } else {
        meta.title = `<h1>${meta.title}</h1>`;
    }

    /**
     * HTML structure for the header section.
     * @type {string}
     */
    let header = `
        <div id="header" data-container>
            ${meta.title}
        </div>
        `;

    /**
     * HTML structure for the main content section.
     * Adjusts layout based on the meta.type value.
     * @type {string}
     */
    let main = `
        <div data-container data-grid="main">
            <aside id="aside" data-column="large-3 medium-3 small-4"></aside>
            <article id="content" data-column="large-9 medium-9 small-4"></article>
        </div>
        `;

    if (meta.type === 'fullPage') {
        main = `
        <div id="content" data-container data-grid="main"></div>
        `;
    }

    /**
     * Determines the template URL based on the hostname.
     * @type {string}
     */
    let templateURL;
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
        ? (templateURL =
              window.location.origin + '/templates/index.59811f9a.html')
        : (templateURL =
              window.location.origin + '/rams/templates/index.19081ad0.html');

    /**
     * Parses and appends the document structure, then loads templates.
     */
    template
        .string(
            `
        <nav data-navbar="top"></nav>
        <header data-section="header">
            ${header}
        </header>
        <main data-section="main">
            ${main}
        </main>
        <footer data-section="footer"></footer>
        `,
            'body'
        )
        .then(() => template.append('#headerTemplate', '#header'))
        .then(() => template.append('#contentTemplate', '#content'))
        .then(() => sidebar())
        .then(() => template.fetch(templateURL))
        .then(() => {
            template.append('#navTemplate', 'nav');
            template.append('#footerTemplate', 'body > footer');
        })
        .finally(() => template.removeAll());

    /**
     * Initializes toggle functionality for interactive elements.
     */
    rams.toggle();
});
