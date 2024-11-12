// Selecciona todos los botones
const buttons = document.querySelectorAll('.btn');
const buttonPlatillos = document.querySelectorAll('.button_image');
 
// Asocia cada botón con su respectivo diálogo
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const dialogId = this.getAttribute('data-dialog'); // Obtiene el ID del diálogo desde el atributo data-dialog
        const dialog = document.getElementById(dialogId); // Selecciona el diálogo correspondiente
        dialog.showModal(); // Muestra el diálogo
    });
});

buttonPlatillos.forEach(button => {
  button.addEventListener('click', function() {
      const dialogId = this.getAttribute('data-dialog-image'); // Obtiene el ID del diálogo desde el atributo data-dialog-image
      const dialog = document.getElementById(dialogId); // Selecciona el diálogo correspondiente
      dialog.showModal(); // Muestra el diálogo
  });
});

// Selecciona todos los botones de cerrar
const closeButtons = document.querySelectorAll('.btn-Cerrar, .cerrar');

// Asocia cada botón de cerrar con su respectivo diálogo
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dialog = button.closest('dialog'); // Selecciona el diálogo más cercano
        if (dialog) {
            dialog.close(); // Cierra el diálogo
        }
    });
});
