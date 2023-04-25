/* Prompt, consola y alert */

let primerNombre = prompt("Ingrese su nombre"); // permite abrir en la pagina un input
alert(primerNombre);                            // muestra el texto ingresado en el prompt

let primerNumero = parseInt(prompt("Ingrese un numero"));  // parseInt convierte el string a un tipo number (en este caso entero)
alert(primerNumero + 5);

/* Ejercicio 1 */

/* Pedir nombre mediante prompt y mostrarlo en consola junto con algun texto de saludo.
Por ejemplo, ¡Hola Juan! */

let nombre = prompt("Ingrese su nombre"); 
alert(`¡Hola ${nombre}!`);                          

/* Ejercicio 2 */

/* Pedir un numero mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable
y luego mostrar el resultado en consola. */

let numero = 4;
let inputNum = parseInt(prompt("Ingrese un numero"));
let suma = numero + inputNum; 
alert(`El resultado de la suma entre ${numero} y ${inputNum} es igual a ${suma}`);                          


/* Ejercicio 3 */

/* Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlos en una alerta */

let primerTexto = prompt("Ingrese un texto");
let segundoTexto = prompt("Ahora, ingrese otro texto");
let mensaje = " ' " + primerTexto + "," + " " + segundoTexto + " ' "; 
alert(`El texto obtenido de concatenar ${primerTexto} y ${segundoTexto} es ${mensaje}`);




