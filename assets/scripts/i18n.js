(function () {
    const STORAGE_KEY = 'bottletrack.language';
    const DEFAULT_LANGUAGE = 'en';
    const LOCALES = { en: 'en-US', es: 'es-419' };
    const dictionaries = window.BOTTLETRACK_TRANSLATIONS || {};

    function readStoredLanguage() {
        try {
            return window.localStorage.getItem(STORAGE_KEY);
        } catch {
            return null;
        }
    }

    function storeLanguage(language) {
        try {
            window.localStorage.setItem(STORAGE_KEY, language);
        } catch {
            return;
        }
    }

    function resolveInitialLanguage() {
        const stored = readStoredLanguage();

        if (stored && dictionaries[stored]) {
            return stored;
        }

        const preferred = (window.navigator.language || '').slice(0, 2).toLowerCase();

        return dictionaries[preferred] ? preferred : DEFAULT_LANGUAGE;
    }

    function translate(language) {
        const dictionary = dictionaries[language];

        if (!dictionary) {
            return;
        }

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const value = dictionary[element.dataset.i18n];

            if (value) {
                element.textContent = value;
            }
        });

        document.documentElement.lang = LOCALES[language] || language;
    }

    function updateSwitch(language) {
        document.querySelectorAll('[data-language]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
    }

    function apply(language) {
        translate(language);
        updateSwitch(language);
        storeLanguage(language);
    }

    document.addEventListener('DOMContentLoaded', () => {
        apply(resolveInitialLanguage());

        document.querySelectorAll('[data-language]').forEach((button) => {
            button.addEventListener('click', () => apply(button.dataset.language));
        });
    });
})();
