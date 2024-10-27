// Selecciona todos los botones y diálogos
const buttonss = document.querySelectorAll(".btn");
const dialogss = document.querySelectorAll("dialog");
const closeButtonss = document.querySelectorAll(".btn-Cerrar");

// Asocia cada botón con su respectivo diálogo
buttonss.forEach((button, index) => {
  button.addEventListener("click", function() {
    dialogss[index].showModal(); // Muestra el diálogo correspondiente al botón
  });
});
 
// Asocia cada botón de cerrar con su respectivo diálogo
closeButtonss.forEach((button, index) => {
  button.addEventListener("click", function() {
    dialogss[index].close(); // Cierra el diálogo correspondiente
  });
}); 

