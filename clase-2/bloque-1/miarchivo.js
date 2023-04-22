/* Ejercicio 1. Pedir un numero mayor a 1000 */ 

let number = prompt("Ingrese un numero");

if(number > 1000){
    alert("El numero ingresado es mayor a 1000");
}else{
    alert("El numero ingresado es menor o igual a 1000");
}

/* Ejercicio 2. Pedir un numero mayor a 1000 */

let text = prompt("Ingrese un text");

if(text === "Hola"){
    alert("El texto ingresado es igual a Hola");
}else if (text == ""){
    alert("Error, ingreso un texto vacio");
} else {
    alert("El texto ingresado es igual a", text);
}

/* Ejercicio 3. Chequear si un numero esta entre 10 y 50 */

let num = prompt("Ingrese un numero");

if(10 <= num && num <= 50){
    alert(`El numero ${num} esta en el rango de 10 y 50`);
}else {
    alert("El numero ingresado no se encuentra entre 10 y 50");
}

