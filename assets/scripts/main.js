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

            toggle.setAttribute(
                'aria-expanded',
                String(!isOpen)
            );
        });

        navigation.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                navigation.dataset.open = 'false';

                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.addEventListener('partials:loaded', () => {
        setupNavigationToggle();
    });

})();
