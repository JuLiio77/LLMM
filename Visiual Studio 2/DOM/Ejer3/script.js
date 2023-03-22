const botonAnadir = document.querySelector("#boton-anadir");
const lista = document.querySelector("#mi-lista");

botonAnadir.addEventListener("click", () => {  //agregar 
  const elemento1 = document.createElement("li"); //crea elemento
  elemento1.textContent = "Elemento de prueba"; //ponemos el texto q queramos
  lista.appendChild(elemento1); // lo que agrega

  const elemento2 = document.createElement("li");
  elemento2.textContent = "Texto de prueba";
  lista.appendChild(elemento2);
});
