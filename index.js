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



 // Referencias a los elementos
 const buttonMostrar = document.getElementById('button-mostrar');
 const overlay = document.getElementById('overlay');
 const buttonVolver = document.getElementById('button-volver');

 // Mostrar el div emergente al hacer clic en el botón
 buttonMostrar.addEventListener('click', function() {
   overlay.style.display = 'block';
   buttonMostrar.style.display = 'none';

 });

 // Cerrar el div emergente al hacer clic en el botón volver
 buttonVolver.addEventListener('click', function() {
   overlay.style.display = 'none';
   buttonMostrar.style.display = 'block';

 });

     


  

  