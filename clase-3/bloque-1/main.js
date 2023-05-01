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

