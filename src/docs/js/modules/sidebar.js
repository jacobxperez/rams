/**
 * Generates a sidebar navigation for posts.
 *
 * This function dynamically creates a table of contents for posts by extracting headings
 * from the content section and inserting navigation links into the sidebar. It supports
 * both large/medium and small screen layouts.
 */
export const sidebar = () => {
    const getAside = document.getElementById('aside');
    const getContent = document.getElementById('content');

    if (meta.type === 'post') {
        /**
         * Selects all heading elements (h1-h6) within the content section.
         * @type {NodeListOf<HTMLElement>}
         */
        const getHeadings = getContent.querySelectorAll(
            'h1, h2, h3, h4, h5, h6'
        );

        /**
         * HTML structure for the table of contents.
         * Includes separate sections for large/medium and small screens.
         */
        const contents = `
                <ul id='contents' data-display="small-none">
                    <li>
                        <p><strong>Contents</strong></p>
                    </li>
                </ul>
    
                <ul data-display="small" data-box="border">
                    <li>
                        <a data-anchor data-flex data-toggle>
                            <strong data-item="grow">Contents</strong>
                            <span data-icon="&#xe043;"></span>
                        </a>
    
                        <ul id='contentsDropdown' data-dropbox>
                        </ul>
                    </li>
                </ul>`;

        // Insert contents into the aside element
        getAside.insertAdjacentHTML('beforeend', contents);

        // Generates sidebar navigation with post headings
        getHeadings.forEach((heading, i) => {
            /**
             * Assigns a unique ID to each heading for navigation purposes.
             */
            heading.setAttribute('id', `${i}`);
            const headingInnerText = heading.innerText;

            /**
             * Generates navigation links for large and medium screens.
             */
            const links = `<li><a href="#${i}">${headingInnerText}</a></li>`;
            const getContents = document.getElementById('contents');
            getContents.insertAdjacentHTML('beforeend', links);

            /**
             * Generates navigation links for small screens.
             */
            const dropdownLinks = `<li><a href="#${i}" data-anchor="menu">${headingInnerText}</a></li>`;
            const getContentsDropdown =
                document.getElementById('contentsDropdown');
            getContentsDropdown.insertAdjacentHTML('beforeend', dropdownLinks);
        });
    }
};
