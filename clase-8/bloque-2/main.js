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

