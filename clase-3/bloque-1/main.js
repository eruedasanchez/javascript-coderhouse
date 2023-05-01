/* Clase 3 bloque 1 Funciones */


/* Funciones sin parametros (tipo void) */

/*
function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}. Bienvenido!`;
    alert(mensaje);
}

saludar();
*/

/* Funciones con parametros */

/* function saludar(saludo,nombre){
    console.log(`${saludo} ${nombre}`);
}

saludar("Hola", "Andres");
saludar(3, 4);
*/

/* 
function sumar(fstNum, sndNum){
    let res = fstNum + sndNum;
    alert(`El resultado de la suma entre ${fstNum} y ${sndNum} es igual a ${res}`);
}

let primerNumero = parseInt(prompt("Ingrese el valor del primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el valor del segundo numero"));
sumar(primerNumero, segundoNumero);
*/

/* Funciones con return */

/* function sumar(fstNum, sndNum){
    let res = fstNum + sndNum;
    return res;
}

let resultado = sumar(5,6);
console.log(`El resultado de la suma es igual a ${resultado}`);
*/

/* Ejemplo de una calculadora basica */

/*
function basicCalculator(primerOperando, segundoOperando, operacion){
    switch(operacion){
        case "+":
            return primerOperando + segundoOperando; 
            break;
        
        case "-":
            return primerOperando - segundoOperando; 
            break;
        
        case "*":
            return primerOperando * segundoOperando; 
            break;
            
        case "/":
            return primerOperando / segundoOperando;
            break; 
            
        default:
            return "Operacion no encontrada. Intente nuevamente con otra operacion";
            break;
    }
}

let fstOperando = parseInt(prompt("Ingrese el valor del primer operando"));
let sndOperando = parseInt(prompt("Ingrese el valor del segundo operando"));
let operation = prompt("Por ultimo, ingrese la operacion que quiere realizar");
let resultado = basicCalculator(fstOperando, sndOperando, operation);
alert(`El resultado de ${fstOperando} ${operation} ${sndOperando} es igual a ${resultado}`); 
*/

/************************** Scope ***************************/

/* Ejemplo de variable global */

/* 
let resultado = 0; // variable global

function sumar(fstNum, sndNum){
    resultado = fstNum + sndNum;
}

sumar(5,6);
console.log(resultado);
*/

/* Si coloco la variable resultado en el siguiente orden se produce un error */

/* function sumar(fstNum, sndNum){
    let resultado = fstNum + sndNum;
}

sumar(5,6);
console.log(resultado); // Aca esta el error porque resultado es una variable local de suma() unicamente 
*/

/* Por ultimo, arreglo el codigo definiendo a resultado como variable local */

/* function sumar(fstNum, sndNum){
    let resultado = fstNum + sndNum;
    console.log(resultado);  
}
sumar(5,6);

*/

/************************** Funciones anonimas ***************************/

/* const suma = function(a,b){
    return a + b;
};

console.log(suma(5,6));
*/

/************************** Arrow functions ***************************/

/* 
const suma = (a,b) => {
    return a + b;
}

console.log(suma(4,6));
*/

// En el caso que se pase solo un parametro, no es necesario poner (). Por ejemplo

/* 
const funcion = a => {
    return a;
}
*/

// En el caso que no haya parametros, escribimos de la siguiente manera

/* 
const funcion = () => {
    return "hola";
}
*/

// Las arrow functions tambien pueden realizar retornos implicitos. Por ejemplo:

/* 
const suma = (a,b) => x + y;
}
*/

/****************** IMPORTANTE: TRABAJAR CON ARROW FUNCTIONS ******************/

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = (a) => a * 0.21;

let precioProducto = 1000;
let descuento = 10;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);



