/* Declaracion de variables */

/*
let edad = 45;                  // Forma recomendada para declarar variables
var nombre = "andres";          // Forma no recomendada para declarar variables
const NUMERO = 6;               // Forma para declarar constantes (se declaran en mayuscula)
edad = 56;
*/

/* Casos en los que funciona var y no let. Por ejemplo, si declaramos:

let edad = 45;
No podemos redeclarar edad de la siguiente manera let edad = 20; 

En cambio, var si permite realizar la siguiente asignacion
var nombre = "andres";
var nombre = "carlos";
*/

/*
let primerNumero = 3;
let segundoNumero = 2;
let suma = primerNumero + segundoNumero;
let resta = primerNumero - segundoNumero;
let producto = primerNumero * segundoNumero;
let division = primerNumero / segundoNumero;
console.log(`El valor de la suma entre ${primerNumero} y ${segundoNumero} es`, suma);                              // Muestra por consola el valor de la variable que se le pase
console.log(`El valor de la resta entre ${primerNumero} y ${segundoNumero} es`, resta);
console.log(`El valor del producto entre ${primerNumero} y ${segundoNumero} es`, producto);
console.log(`El valor de la division entre ${primerNumero} y ${segundoNumero} es`, division);
*/

let saludo = "Hola";
let nombre = "Pepe";
let mensaje = saludo + nombre;                                      // simbolo + para concatenar strings
console.log(mensaje);



