/* Clase 6. Storage & JSON. Bloque 2 */

// Storage: Espacio que hay adentro de mi navegador que nos permite almacenar informacion 

/************************** LOCAL STORAGE **************************/

// console.log(localStorage);

// localStorage.setItem("nombre", "mariana");      // guarda la clave con su respectivo valor
// localStorage.setItem("numero", "1");            // todo en localStorage se guarda como un string. Por eso, lo almaceno como string
// localStorage.setItem("valor", true);

// let nombre = localStorage.getItem("nombre");    // obtener el valor de la clave nombre
// let numero = localStorage.getItem("numero");
// let valor = localStorage.getItem("valor");

// console.log(nombre);
// console.log(numero);
// console.log(valor);

/************************** SESSION STORAGE **************************/

// A diferencia del LOCAL STORAGE, se pierde toda la informacion una vez 
// que se cierra la pagina

// console.log(sessionStorage);

// sessionStorage.setItem("nombre", "mariana");   
// sessionStorage.setItem("numero", "1");
// sessionStorage.setItem("valor", "true");

// let nombre = sessionStorage.getItem("nombre");    // obtener el valor de la clave nombre
// let numero = sessionStorage.getItem("numero");
// let valor = sessionStorage.getItem("valor");

// console.log(nombre);
// console.log(numero);
// console.log(valor);


/** Recorrido del local storage **/

// for(let i=0; i < localStorage.length; i++){
//     let clave = localStorage.key(i);            // obtencion de la clave. No se listan en el orden que fueron declaradas porque key tiene asociado un id (no es un arreglo)
//     console.log("clave", clave);
//     console.log("valor", localStorage.getItem(clave));
// }

/** Eliminar el LOCAL/SESSION STORAGE **/

// localStorage.removeItem("nombre");  // eliminacion por clave
// localStorage.clear();               // elimina todo el local/session storage

/****************************** JSON ******************************/

// Json permite guardar arreglos, objetos 

// let objeto = {
//     nombre: "andres",
//     edad: 26,
// };

// // localStorage.setItem("objeto", objeto); // muestra ['object Object'] (no sirve para objetos)

// // let arreglo = [1,2,3,4,5];
// // localStorage.setItem("objeto", arreglo); // tampoco funciona en arreglos

// localStorage.setItem("objeto", JSON.stringify(objeto)); // almacena efectivamente al objeto
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let arreglo = localStorage.getItem("arreglo");
// let objeto = localStorage.getItem("objeto");

// console.log(JSON.parse(arreglo)); // muestra efectivamente al arreglo 
// console.log(JSON.parse(objeto));  // muestra efectivamente al objeto

// const productos = [
//     {id: 1, nombre: "camisa", precio: 1000},
//     {id: 2, nombre: "zapato", precio: 1200},
//     {id: 3, nombre: "media", precio: 800},
//     {id: 4, nombre: "gorra", precio: 1500},
// ];

// const guardar = (clave,valor) => {
//     localStorage.setItem(clave, JSON.stringify(valor));
// };

// productos.forEach(item =>{
//     guardar(item.id, item);
// })

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// // console.log(usuarioStorage); // imprime null

// if(usuarioStorage){
//     usuario = usuarioStorage;
//     alert(`Bienvenido ${usuario} nuevamente`);
// } else {
//     usuario = prompt("Ingrese el usuario");
//     alert(`Bienvenido ${usuario} es tu primera vez`);
//     sessionStorage.setItem("usuario", usuario);
// }

// Usando localStorage una vez que se almacena el usuario, siempre se mantiene 
// Usando sessionStorage se almacena el usuario y se mantiene hasta que se cierre la pagina

const productos = [
    {id: 1, nombre: "camisa", precio: 1000},
    {id: 2, nombre: "zapato", precio: 1200},
    {id: 3, nombre: "media", precio: 800},
    {id: 4, nombre: "gorra", precio: 1500},
];

localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let boton = document.getElementById("eliminar");
let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
    carrito = JSON.parse(carritoStorage);
} else {
    let div = document.createElement("div");
    div.innerHTML = "El carrito esta vacio";
    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>${item.precio} </b>
    </hr />
    `;
    document.body.append(div);
});

boton.addEventListener("click", () => {
        localStorage.clear();
        alert("carrito eliminado");
        location.reload();
});






