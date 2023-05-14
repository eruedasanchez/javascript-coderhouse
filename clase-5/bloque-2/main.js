/* Clase 5. Bloque 2. Modelo de objetos del documento (DOM) */

console.log(document);      // Muestra un objeto global que permite acceder a muchas propiedades. Document es el conector entre el html y el js
console.log(document.body); // Accede al body de index.html

let div = document.getElementById("aplicacion");  // getElementById obtiene la etiqueta del HTML pasada por id
console.log(div);
console.log(div.innerHTML); // innerHTML obtiene el contenido de la etiqueta asociada al id pasado por parametro
console.log(div.innerText); // innerText obtiene unicamente el texto que se encuentra contenido en la etiqueta asociada al id pasado por parametro

let parrafo =  document.getElementById("parrafo");
console.log(parrafo);
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);

let perritos = document.getElementsByClassName("perritos"); // Obtencion de la clase perrito
for(const perrito of perritos){
    console.log(perrito.innerHTML);
}

console.log(perritos); // Retorna HTMLCollection() la cual se maneja de manera muy similar a un arreglo (HTMLCollection NO es un arreglo!)
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0].innerHTML);

let saludo = document.getElementById("saludo");
saludo.innerHTML = "Cambiamos el saludo. Bienvenidos!";
saludo.innerHTML = "<h1>Hola mundo!</h1>"; // Se permite tambien agregar etiquetas HTML

let seccion = prompt("Escriba la seccion a la que desea ingresar");

if(seccion === "carrito"){
    saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
    saludo.className = "azul";
} else if(seccion === "favoritos"){
    saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
    saludo.className = "rojo";
} else {
    saludo.innerHTML = "<h1>Bienvenido a nuestra super pagina</h1>";
    saludo.className = "verde";    
}

/******************** Agregar nodos ********************/

let parr = document.createElement("p");                             // Creacion de la etiqueta
let contenedor = document.getElementById("contenedor");
parr.innerHTML = "<h1> Hola a todos </h1>"                          // Asignacion de contenido
document.body.append(parr);                                         // Asignacion del padre en el body en este caso
contenedor.append(parr);


/******************** Eliminar un nodo ********************/


let content = document.getElementById("content");
content.remove();

const nombres = ["walter", "agustin", "pepito"];
let con = document.getElementById("contenedor");
nombres.forEach(nombre => {
    let div = document.createElement("div");
    div.innerHTML = nombre;
    con.append(div);
});

/**************** Ejemplo con productos ****************/

const productos = [
    {id: 1, nombre:"camisa", precio: 1000},
    {id: 2, nombre:"pantalon", precio: 1100},
    {id: 3, nombre:"gorra", precio: 300},
    {id: 4, nombre:"media", precio: 400},
];
let cont = document.getElementById("contenedor");

productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre} </p>
    <b>Precio: $${producto.precio} </b>`;
    cont.append(div);
}) 


