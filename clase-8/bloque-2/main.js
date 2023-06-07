/* Clase 8. Bloque 2. Modelos de programacion sincronica y asincronica */

/*************** Ejercicio 1 ***********/

// Funcion asincrona setTimeout(function, timer). Espera timer segundos para ejecutar la function 

setTimeout(() => {
    console.log('Hola');
}, 3000)

/*************** Ejercicio 2 ***********/

console.log('inicio');

setTimeout(() => {
    console.log('intermedio');
}, 5000);

console.log('final');

// Se imprime por pantalla inicio, final e intermedio

/*************** Ejercicio 3 ***********/

let saludo = document.getElementById('saludo');
let boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    saludo.classList.add('color');

    setTimeout(() => {
        saludo.classList.remove('color');
    }, 3000);
});

// Al hacer click en el boton, se coloca el fondo verde y a los 3seg desaparece dicho fondo

/*************** Ejercicio 4 ***********/

for(let letra of "Hola"){
    setTimeout(() => {
        console.log(letra);
    }, 1000);
}

for(let letra of "Mundo"){
    setTimeout(() => {
        console.log(letra);
    }, 3000);
}

/*************** Call Stack ***********/

// Lista donde se apilan todos los procedimientos de JS.   

/*************** Ejercicio 5 ***********/

console.log('inicio proceso');

setTimeout(() => {
    console.log('mitad proceso');
}, 0);

console.log('final proceso');

// Se imprime por pantalla inicio, final y mitad proceso porque comienza leyendo
// 'inicio proceso', luego detecta una funcion asincrona setTimeout() y se la lleva al call Stack
// y mientras tanto lee 'final proceso' 


/************************** Event Loop **********************/

// El event loop es una herramienta que ayuda a sincronizar el callstack con los procesos
// asincronos

/************************** Set interval **********************/

setInterval(() => {
    console.log("Hola");
}, 1000);

// Imprime indefinidamente "Hola" cada 1 segundo (1000 milisegundos)

let counter = 0;

const interval = setInterval(() => {
    counter++;
    console.log("Counter", counter);

    if(counter >= 5){
        clearInterval(interval);
        console.log("Se removio el intervalo")
    }
}, 1000);

// Resultado por pantalla

// Counter 1
// Counter 2
// Counter 3
// Counter 4
// Counter 5
// Se removio el intervalo

/************************** PROMESAS **********************/

/* Estructura de la promesa */

new Promise((resolve, reject) => {
    // codigo de la promesa
})

const futuro = (valor) => {
    return new Promise((resolve,reject) => {
        valor ? resolve("promesa resuelta") : reject("promesa rechazada");
    });
};

console.log(futuro(true)); // promise { 'promesa resuelta' }
console.log(futuro(false)); // promise { 'promesa rechazada' } pero tira error porque no capturo el error

/* Lo arreglamos de la siguiente manera */

futuro(false)
    .then((response) => console.log(response))          // futuro.then  captura la respuesta en caso de que sea exitosa
    .catch((error) => console.log(error))               // futuro.catch captura la respuesta en caso de que no sea exitosa (respuesta erronea)
    .finally(() => console.log("proceso terminado"));   // se ejecuta siempre si la respuesta es exitosa o no. Es independiente 


//////////////////////////////////////////////////////////
// Base de datos (lado servidor)

const DB = [
    {id:1, nombre: "camisa", precio: 1000},
    {id:2, nombre: "zapato", precio: 1000},
    {id:3, nombre: "gorra", precio: 1000},
    {id:4, nombre: "media", precio: 1000},
];

const traerProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(DB);
        },3000);
    });
};
//////////////////////////////////////////////////////////

traerProductos()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => console.log(error));

// Luego de 3seg, se cargan los productos

traerProductos()
    .then((response) => {
        response.forEach((producto) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <h2>Id: ${producto.id}</h2>
            <p>Nombre: ${producto.nombre}</p>
            <b>Id: ${producto.precio}</b>
            </hr>`;

            document.body.append(div);
        });
    })
    .catch((error) => console.log(error));

// Luego de 3seg, se cargan y se genera el codigo html puesto en el innerHTML