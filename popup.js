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

  // Selecciona todas las imágenes de platillos
const imagesPlatillos = document.querySelectorAll(".images_platillos");

// Asocia un evento de clic a cada imagen de platillo
imagesPlatillos.forEach((image, index) => {
  image.addEventListener("click", function() {
    const pasosDiv = image.closest('.pasos'); // Encuentra el div de pasos correspondiente
    pasosDiv.style.display = 'block'; // Muestra el div de pasos
  });
})
