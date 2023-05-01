/* Clase 2. Bloque 2. Ciclos for y while */ 

/*
for(let i=0; i < 100; i++){
    Repetir 100 veces el saludo "hola"  
    if(i === 99){
        console.log("Chau");
    } else {
        console.log("Hola");
    }
}
*/

/*
let numero = parseInt(prompt("Ingrese un numero"));
let resultado;
for(let i=1; i <= 5; i++){
    resultado = numero * i;
    alert(`El numero ${numero} multiplicado por ${i} es igual a ${resultado}`);

}
*/

/* Sentencia break */

/*
for(let i=0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
*/

/* Sentencia continue */

/* 
for(let i=0; i < 10; i++){
    if(i === 5){
        continue; // saltea la condicion 
    }
    console.log(i);
}
*/

/*
let usuario = prompt("Ingrese su nombre de usuario");
while(usuario != "pepito"){
    alert("El nombre del usuario es incorrecto");
    usuario = prompt("Ingrese nuevamente su nombre de usuario")
}
alert("Bienvenido pepito querido");
*/

/* Ciclo Do while */

/*
let usuario;
do{
    usuario = prompt("Ingrese su nombre de usuario");
    if(usuario === "pepito"){
        alert("Bienvenido pepito");
        break;
    }
} while(usuario != "pepito"){
    alert("El nombre del usuario es incorrecto");
}
*/

/* Estructura del switch */

/*
alert("Bienvenido! Yo soy la calculadora mas basica de todas");
let resultado = 0;
let primerOperando = parseInt(prompt("Ingrese el valor del primer operando")); 
let segundoOperando = parseInt(prompt("Ahora, ingrese el valor del segundo operando"));
let operacion = prompt("Por ultimo, escriba que operacion quiere realizar");
while(true){
    switch(operacion){
        case "suma":
            resultado = primerOperando + segundoOperando; 
            alert(`La suma entre ${primerOperando} y ${segundoOperando} es igual a ${resultado}`);
            break;
    
        case "resta":
            resultado = primerOperando - segundoOperando; 
            alert(`La resta entre ${primerOperando} y ${segundoOperando} es igual a ${resultado}`);
            break;
    
        case "multiplicacion":
            resultado = primerOperando * segundoOperando; 
            alert(`La multiplicacion entre ${primerOperando} y ${segundoOperando} es igual a ${resultado}`);
            break;
    
        case "division":
            resultado = primerOperando / segundoOperando; 
            alert(`La division entre ${primerOperando} y ${segundoOperando} es igual a ${resultado}`);
            break;
    
        default:
            alert(`La operacion solicitada entre ${primerOperando} y ${segundoOperando} no la puedo realizar`);
            break;
    }
    primerOperando = parseInt(prompt("Ingrese el valor del primer operando")); 
    segundoOperando = parseInt(prompt("Ahora, ingrese el valor del segundo operando"));
    operacion = prompt("Por ultimo, escriba que operacion quiere realizar");
}
*/

/* Ejercicio adicional. Chequear si un numero es o no primo */

let valor = parseInt(prompt("Ingrese el numero que desea chequear si es o no primo"));
while(true){
    if(valor <= 1){
        alert(`Por favor, ingrese un numero natural mayor a 1`);
    } else {
        let sumaDivisores = 0;
        for(let i=2; i <= valor; i++){
            if(valor % i === 0){
                sumaDivisores++;
            }
        }
        if(sumaDivisores === 1){
            alert(`El numero ${valor} es primo`);
        } else {
            alert(`El numero ${valor} no es primo`);
        }
    }
    valor = parseInt(prompt("Ingrese el numero que desea chequear si es o no primo"));
}




