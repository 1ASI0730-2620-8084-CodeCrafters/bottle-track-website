(function () {
    const LOADED_EVENT = 'partials:loaded';

    function pageName(path) {
        const name = path.split('/').pop().replace(/\.html$/, '');

        return name === '' ? 'index' : name;
    }

    function adaptLinks(root) {
        const page = pageName(window.location.pathname);

        root.querySelectorAll('a[href]').forEach((link) => {
            const [target, hash] = link.getAttribute('href').split('#');

            if (!target || target.includes(':') || pageName(target) !== page) {
                return;
            }

            if (hash) {
                link.setAttribute('href', `#${hash}`);
            } else {
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    async function include(placeholder) {
        const source = placeholder.dataset.include;
        const response = await fetch(source);

        if (!response.ok) {
            throw new Error(`Could not load ${source} (${response.status})`);
        }

        const template = document.createElement('template');

        template.innerHTML = (await response.text()).trim();
        adaptLinks(template.content);
        placeholder.replaceWith(template.content);
    }

    async function loadPartials() {
        const placeholders = Array.from(document.querySelectorAll('[data-include]'));
        const results = await Promise.allSettled(placeholders.map(include));

        results
            .filter((result) => result.status === 'rejected')
            .forEach((result) => console.error('[partials]', result.reason));

        document.documentElement.dataset.partialsLoaded = 'true';
        document.dispatchEvent(new Event(LOADED_EVENT));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPartials);
    } else {
        loadPartials();
    }
})();
