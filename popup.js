// Selecciona todos los botones y diálogos
const buttons = document.querySelectorAll(".btn");
const dialogs = document.querySelectorAll("dialog");
const closeButtons = document.querySelectorAll(".btn-Cerrar");

// Asocia cada botón con su respectivo diálogo
buttons.forEach((button, index) => {
  button.addEventListener("click", function() {
    dialogs[index].showModal(); // Muestra el diálogo correspondiente al botón
  });
});

// Asocia cada botón de cerrar con su respectivo diálogo
closeButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    dialogs[index].close(); // Cierra el diálogo correspondiente
  });
});