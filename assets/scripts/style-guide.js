document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-copy]');

    buttons.forEach((button) => {
        button.addEventListener('click', async () => {
            const value = button.dataset.copy;
            const original = button.textContent;

            try {
                await navigator.clipboard.writeText(value);
                button.textContent = 'Copied';
            } catch {
                button.textContent = value;
            }

            window.setTimeout(() => {
                button.textContent = original;
            }, 1200);
        });
    });
});
