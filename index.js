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

document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownOptions = document.getElementById('dropdown-Options');
  
    dropdownMenu.addEventListener('click', function (event) {
      event.stopPropagation(); // Evita que el clic se propague a otros elementos.
      dropdownOptions.style.display =
        dropdownOptions.style.display === 'block' ? 'none' : 'block';
    });
  
    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', function () {
      dropdownOptions.style.display = 'none';
    });
  });

  const boton = document.getElementById("miBoton");

    boton.addEventListener("click", function() {
        boton.classList.add("activado");

        // Desactivar después de un tiempo si es necesario
        setTimeout(() => {
            boton.classList.remove("activado");
        }, 2000); // El tiempo en milisegundos
    });
