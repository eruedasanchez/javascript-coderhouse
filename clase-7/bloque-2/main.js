/* Clase 7. Operadores avanzados II + workshop. Bloque 2 */

/* Pasaje de datos por valor o copia */

let nombre1 = "juan";
let nombre2 = nombre1;

nombre2 = "camila";
console.log(nombre1); // juan

/* Pasaje de datos por referencia */

let usuario1 = {nombre: "camila", edad: 18};
let usuario2 = usuario1;
// Como trabajamos con objetos (puede suceder lo mismo para arreglos), tanto usuario1 como usuario2 apuntan a la misma direccion de memoria

usuario2.nombre = "sofia";
console.log(usuario1);     // {nombre: "sofia", edad: 18}

// Para evitar la modificacion y crear una copia, aplicamos el spread operator (...)

let usuarioUno = {nombre: "camila", edad: 18};
let usuarioDos = {...usuarioUno}; // ubica al usuarioDos en otra posicion de memoria gracias a ...

usuarioDos.nombre = "sofia";
console.log(usuarioUno);     // {nombre: "sofia", edad: 18}

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
console.log(...nombres);        // Juan Julieta Carlos Mariela
console.log(nombres);           // ["Juan", "Julieta", "Carlos", "Mariela"]

const numeros = [4,77,92,10,3,-32,54,11];
console.log(Math.max(...numeros));          // Retorna 92
console.log(Math.max(numeros));             // Retorna NaN

const nombresUno = ["Juan", "Julieta"];
const nombresDos = ["Carlos", "Mariela"];

const unionNombres = [...nombresUno, ...nombresDos];
console.log(unionNombres);                              // ["Juan", "Julieta", "Carlos", "Mariela"]

const usuarioTres = {
    nombre: "Juan",
    edad: 24,
    curso: "javascript",
};

const usuarioCuatro = {
    ...usuarioTres,
    curso: "react",
    direccion: "AV",
};

console.log(usuarioCuatro);

/* Rest parameters */

function armarArreglo(...numbers){
    console.log(numbers);
}

armarArreglo(4,5,6,8,8,4,2,2); // [4,5,6,8,8,4,2,2]
armarArreglo(4,2);             // [4,2]

function sumar(...numeros){
    return numeros.reduce((acum, item) => acum + item, 0);
}

console.log(sumar(4,5,6,8,8,4,2,2)); // 39
console.log(sumar(4,2)); // 6 suma todos los valores pasados por parametro (4,6)
