//Seleccionar elementos de mi documento
console.log(document)
console.log(document.getElementById("cabecera"))
console.log(document.getElementsByClassName("border-grey"))
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByName('navegacion'))
console.log(document.querySelectorAll('li'))

const elemento = document.getElementById("cabecera")
console.log(elemento.children) // hijo del elemento header
console.log(elemento.parentNode) //padre del elemento header

//Creacion, Modificacion de elementos
const titulo2 = document.createElement('h2')
const textoTitulo2 = document.createTextNode("Nuevo titulo en header")
titulo2.appendChild(textoTitulo2) //para crea elementos
elemento.append(titulo2) //aqui ponemos el titulo en la parte de arriba

//Clonar elementos
const articulo = document.querySelector('article')
const articulo2 = articulo.cloneNode(true)

//aqui añadimos otra seccion denajo de la primera seccion
const seccion = document.getElementById("seccion")//le damos una id a section
// seccion.append(articulo2)

// articulo.parentElement.append(articulo2)

// seccion.insertAdjacentElement('afterend', articulo2)

//Modificamos el titulo del documento
const h1 = document.querySelector('h1')
console.log(h1.textContent)
//Dos metodos diferentes para modificar el documento
// h1.textContent = "NUEVO H1"
// h1.firstChild.data = "Nuevo Titulo"

//Borrar seccion
// seccion.remove();

//Modifica la seccion con lo que le digamos 
// seccion.innerHTML = "<h2> Nueva Seccion </h2>"

//Igual que el anterior pero no tiene en cuenta el padre
// seccion.outerHTML =  "<h2> Nueva Seccion </h2>"

//Todos los elementpos de a
const elementosHref = document.querySelectorAll('a')

//creamos un bucle for que recorra elementosHref
for(i = 0; i < elementosHref.length; i++){
    elementosHref[i].textContent += " " + (i + 1)
}
