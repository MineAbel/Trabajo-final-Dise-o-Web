document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Aplica el tema almacenado si existe
    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        toggle.checked = currentTheme === 'dark';
    }

    // Cambia el tema y guarda la preferencia en localStorage
    toggle.addEventListener('change', () => {
        const isDarkMode = toggle.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
