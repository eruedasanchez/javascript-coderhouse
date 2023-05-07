/************* Clase 4. Bloque 2. Funciones de orden superior I *************/

function mayorQue(n){
    return m => m > n;
}

let mayorQueCinco = mayorQue(5);
console.log(mayorQueCinco(6));          // true
console.log(mayorQueCinco(4));          // false


/* Operaciones funciona como una funcion generadora */

function operaciones(op){
    if(op === "sumar"){
        return (a,b) => a + b;
    } else if(op === "restar"){
        return (a,b) => a . b;
    } else if(op === "producto"){
        return (a,b) => a * b;
    } else if(op === "dividir"){
        return (a,b) => a / b;
    } else {
        return;
    }
}

let suma = operaciones("sumar");
console.log(suma(6,5));

let opIndefinida = operaciones("potencia");
console.log(opIndefinida);                      // devuelve undefined

/* Funciones de alto orden que reciben por parametro una funcion */

function iterador(arreglo, funcion){
    for(const numero of arreglo){
        funcion(numero);
    }
}

iterador([1,2,3,4,5], console.log);            // retorna cada elemento del arreglo

const duplicados = [];

function iteradorDupli(arreglo, funcion){
    for(const item of arreglo){
        funcion(item);
    }
}

iteradorDupli([1,2,3,4,5], (el) => {
    duplicados.push(2 * el);
});

console.log(duplicados);






