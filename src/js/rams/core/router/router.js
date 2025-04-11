import {createSignal, effect} from '../signals/signal.js';

const [path, setPath] = createSignal(window.location.pathname);
const [routeParams, setRouteParams] = createSignal({});

function parseRoute(routePattern, actualPath) {
    const keys = [];
    const pattern = routePattern
        .replace(/:([^/]+)/g, (_, key) => {
            keys.push(key);
            return '([^/]+)';
        })
        .replace(/\//g, '\\/');

    const regex = new RegExp(`^${pattern}$`);
    const match = actualPath.match(regex);

    if (!match) return null;

    const params = {};
    keys.forEach((key, index) => {
        params[key] = match[index + 1];
    });
    return params;
}

function matchRoute(routePattern) {
    const pathname = path();
    return parseRoute(routePattern, pathname);
}

function navigate(to) {
    history.pushState({}, '', to);
    setPath(to);
}

function startRouter() {
    window.addEventListener('popstate', () => {
        setPath(window.location.pathname);
    });
}

function bindRoutes(root = document.body) {
    const routes = root.querySelectorAll('[data-route]');

    routes.forEach((el) => {
        const routePattern = el.getAttribute('data-route');

        effect(() => {
            const params = matchRoute(routePattern);
            if (params) {
                setRouteParams(params);
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    });
}

function bindLinks(root = document.body) {
    const links = root.querySelectorAll('[data-link]');
    links.forEach((el) => {
        const href = el.getAttribute('data-link');
        el.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(href);
        });
    });
}

export {
    path as currentRoute,
    routeParams,
    navigate,
    startRouter,
    bindRoutes,
    bindLinks,
};
