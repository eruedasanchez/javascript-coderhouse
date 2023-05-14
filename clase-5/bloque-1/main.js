/* Ejercicios clase 5. Funciones de orden superior II. Bloque I */

// Metodo math 

console.log(Math.E);      // Numero de Euler
console.log(Math.PI);     // Numero pi

console.log(Math.max(4,3,5,6,77,8,9,70));  // Maximo de una serie de numeros 
console.log(Math.min(4,3,5,6,77,8,9,70));  // Minimo de una serie de numeros

console.log(Math.ceil(3.1));        // Funcion techo (devuelve el entero mayor o igual más próximo a un número dado)
console.log(Math.floor(3.1));       // Funcion piso (devuelve el entero menor o igual más próximo a un número dado)
console.log(Math.round(3.7));       // Redondea al entero mas proximo -> 4
console.log(Math.round(3.5));       // Redondea a 4
console.log(Math.round(3.7));       // Redondea a 4

console.log(Math.sqrt(9));          // Raiz cuadrada
console.log(3.14.toFixed(1));       // El metodo toFixed(x) indica que se van a truncar x decimales del numero pasado por parametro
console.log(Math.trunc(1.454567));  // El metodo trunc(x) indica que se van a truncar todos los decimales de x

console.log(Math.random());                     // Generacion de numero aleatorio entre 0 y 1
console.log(Math.random() * 10);                // Generacion de numero aleatorio entre 0 y 10
console.log(Math.round(Math.random() * 10));    // Generacion de numero aleatorio entre 0 y 10. En caso de tener digitos decimales, lo aproxima al entero mayor mas cercano
console.log((Math.random() * 10) + 5);          // Generacion de numero aleatorio entre 5 y 15. Al multiplicar se define la longitud del intervalo (en este caso 10) y al sumar se indica el inicio del intervalo (en este caso de 5 a 15, i.e, [5,15])

const numberGenerator = (longitud, inicio) => {
    return Math.round(Math.random() * longitud) + inicio;
}

console.log(numberGenerator(10,15));
console.log(numberGenerator(10,15));
console.log(numberGenerator(10,15));

const nombres = ["ezequiel", "juancito", "pepito", "ana", "maria", "andres", "florencia", "leandro", "julian", "agustina"];
const indiceAleatorio = numberGenerator(nombres.length - 1, 0);
console.log(nombres[indiceAleatorio]);


