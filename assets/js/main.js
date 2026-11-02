(function () {
    function setupNavigationToggle() {
        const toggle = document.querySelector('[data-nav-toggle]');
        const navigation = document.getElementById('primary-nav');

        if (!toggle || !navigation) {
            return;
        }

        toggle.addEventListener('click', () => {
            const isOpen = navigation.dataset.open === 'true';

            navigation.dataset.open = String(!isOpen);
            toggle.setAttribute('aria-expanded', String(!isOpen));
        });

        navigation.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navigation.dataset.open = 'false';
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function setupContactForm() {
        const form = document.querySelector('[data-contact-form]');
        const status = document.querySelector('[data-contact-status]');

        if (!form || !status) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.reset();
            status.hidden = false;
        });

        form.addEventListener('input', () => {
            status.hidden = true;
        });
    }

    function setupTeamVideo() {
        const section = document.querySelector('[data-team-section]');
        const link = document.querySelector('[data-team-link]');
        const frame = section ? section.querySelector('iframe') : null;

        if (!frame || !frame.getAttribute('src')) {
            return;
        }

        section.hidden = false;
        link.hidden = false;
    }

    document.addEventListener('DOMContentLoaded', () => {
        setupTeamVideo();
        setupNavigationToggle();
        setupContactForm();
    });
})();
