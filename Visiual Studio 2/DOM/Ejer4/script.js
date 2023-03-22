const formulario = document.querySelector('#formulario');
const nuevoElemento = document.querySelector('#nuevo-elemento');
const lista = document.querySelector('#mi-lista');

formulario.addEventListener('submit', (event) => { 
  event.preventDefault();
  
  const elemento = document.createElement('li');
  elemento.textContent = nuevoElemento.value;
  lista.appendChild(elemento);
  
  nuevoElemento.value = '';
});
