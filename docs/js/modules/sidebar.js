const sidebar = () => {
    const getAside = document.getElementById('aside');
    const getContent = document.getElementById('content');

    if (template.type === 'post') {
        const getHeadings = getContent.querySelectorAll(
            'h1, h2, h3, h4, h5, h6'
        );

        const postNav = `
                <ul id='listMenu' data-display="small-none">
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
    
                        <ul id='listMenuDropdown' data-dropbox>
                        </ul>
                    </li>
                </ul>`;

        getAside.insertAdjacentHTML('beforeend', postNav);

        // generates sidebar navigation with post headings
        getHeadings.forEach((heading, i) => {
            heading.setAttribute('id', `${i}`);
            const headingText = heading.innerText;

            // navigation for large and medium screens
            const links = `<li><a href="#${i}">${headingText}</a></li>`;
            const getListMenu = document.getElementById('listMenu');
            getListMenu.insertAdjacentHTML('beforeend', links);

            // navigation for small screens
            const dropdownLinks = `<li><a href="#${i}" data-anchor>${headingText}</a></li>`;
            const getListMenuDropdown =
                document.getElementById('listMenuDropdown');
            getListMenuDropdown.insertAdjacentHTML('beforeend', dropdownLinks);
        });
    }
};

export {sidebar};
