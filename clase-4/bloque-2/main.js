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

/************************** Metodos de busqueda y transformacion **************************/

/* Metodo forEach(). Recorrer un arreglo */

const productos = [
    {id: 1, nombre: "camisa", precio: 1000},
    {id: 2, nombre: "zapato", precio: 1320},
    {id: 3, nombre: "gorra", precio: 750},
    {id: 4, nombre: "media", precio: 1500}
];

productos.forEach(item => {
    console.log(item.id);
    console.log(item.nombre);
});

/* Metodo find(). Encuentra la primer ocurrencia que cumple la condicion */

/* 
const encontrado = productos.find(item => item.nombre === "camisa");
console.log(encontrado);                                                // Devuelve el arreglo que contiene como nombre a camisa 

let name = prompt("Ingrese el nombre del producto a buscar");
const encontre = productos.find(item => item.nombre === name);
if(encontre){
    let mensaje = `Id: ${encontre.id}, Nombre: ${encontre.nombre}, Precio: ${encontre.precio}`;
    alert(mensaje);
} else {
    alert(`${name} no se encontra en la lista de productos con stock. Lo sentimos.`);
}
*/


/* Metodo filter(). Encuentra todas las ocurrencias que cumple la condicion */

/* 

const encontrados = productos.filter(item => item.precio > 1000);
console.log(encontrados);                                                // Devuelve el arreglo que contiene como nombre a camisa 

let precio = prompt("Ingrese el maximo precio que esta dispuesto a abonar");
const encontradosInput = productos.filter(item => precio > item);
encontradosInput.forEach((item) => {
    let mensaje = `Id: ${item.id}, Nombre: ${item.nombre}, Precio: ${item.precio}`;
    alert(mensaje);
});
*/


/* Metodo some(). Verifica si al menos un elemento del arreglo cumple la condicion */ 

console.log(productos.some(item => item.precio === 750));           //true
console.log(productos.some(item => item.precio === 20));            //false

/* Metodo map(). Transforma los elementos del arreglo */

const nombres = productos.map(item => item.nombre);
console.log(nombres);                               // Retorna unicamente el nombre de los productos. Elimina id y precio


const preciosNavidad = productos.map(item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio * 0.21
    }
});

console.log(preciosNavidad);

/* Metodo reduce(). Reduce todo el arreglo a un unico valor. Recibe una arrow function y un valor inicial (acum inicializado en 0 en este caso) */

const numeros = [3, 2, 4, 5, 5, 66];
const sumaNumeros = numeros.reduce((acum,item) => acum + item, 0);
console.log(sumaNumeros); 

const sumaProductos = productos.reduce((acum,item) => acum + item.precio, 0);
console.log(sumaProductos);

/* Metodo sort(). Ordenar un arreglo */

const numbers = [40, 1, 5, 200];
numbers.sort((a,b) => b - a);           // Orden decreciente
console.log(numbers);
numbers.sort((a,b) => a - b);           // Orden creciente
console.log(numbers);

const itemsPikachus = [
    {name: "Pikachu", price: 21},
    {name: "Charmander", price: 37},
    {name: "Pidgey", price: 45},
    {name: "Squirtle", price: 60},
];

/* Ordenar Pikachus por orden alfabetico de la a la z */

itemsPikachus.sort((a,b) => {
    if(a.name > b.name){
        return 1;
    } 
    if(a.name < b.name){
        return -1;
    }
    // a es igual a b
    return 0;
})

console.log(itemsPikachus);

/* Ordenar Pikachus por orden alfabetico de la z la a */

itemsPikachus.sort((a,b) => {
    if(a.name > b.name){
        return -1;
    } 
    if(a.name < b.name){
        return 1;
    }
    // a es igual a b
    return 0;
})

console.log(itemsPikachus);













