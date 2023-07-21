//creo una variable que refiera al elemento que llamé "titulo" en el DOM
const titulo = document.getElementById('titulo');
const seccion = document.getElementById('seccion')

//creo una función para rellenar la etiqueta <h1> de HTML a la que le puse como ID "titulo"
const mostrarTitulo = () =>{
    titulo.innerHTML = 'Mi primer render desde JS'
}

//llamo a la función para que se ejecute
mostrarTitulo()

const nombrarSeccion = () =>{
    seccion.innerHTML = 'Catálogo de Productos'
}

nombrarSeccion()


let nombreUsuario = prompt("Por favor ingrese su nombre");
alert(nombreUsuario)


