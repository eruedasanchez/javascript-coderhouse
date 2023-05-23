/* Clase 4. Arrays. Bloque 1 */

/* Declaracion de arreglos */

const vacio = [];                           // Arreglo vacio (por seguridad, siempre declararlo como un tipo 'const')
const numeros = [1,2,3,4,5,6];
const nombres = ["andres", "camila"];
const valores = [true, false, false, true];
const variados = [1, "andres", true];

/* Acceso a la informacion de los arreglos */

console.log(nombres);
console.log(nombres[0]); // andres
console.log(nombres[1]); // camila
console.log(numeros[1] + numeros[3]);

/* Recorrido e impresion de los elementos del arreglo */

for(let index = 0; index < nombres.length; index++){
    console.log(nombres[index]);
}

/* Agregar elementos al final del arreglo */

nombres.push("juancito");
console.log(nombres);

/* Agregar elementos al inicio del arreglo */

nombres.unshift("maria".toUpperCase());             // .toUpperCase() convierte a mayuscula cada caracter
console.log(nombres);

/* Agregar elementos en una posicion valida del arreglo */

nombres.splice(3,0,"ezequiel");                    // splice(posicion, elementos que se quitan, elementos que se añaden)  
console.log(nombres);

/* Quitar el ultimo del arreglo */

nombres.pop();                      
console.log(nombres);

/* Quitar el primer del arreglo */

nombres.shift();                      
console.log(nombres);

/* Quitar un elemento en una posicion valida del arreglo */

nombres.splice(0,1);    // eliminar desde la posicion 0, 1 un elemento                  
console.log(nombres);

/* Unir en un solo arreglo todos los elementos separados por lo pasado como parametro */

console.log(nombres.join("="));
console.log(numeros.join("<"));

/* Concatenar arreglos */

const mascotas = ["riri", "peggy"];
const humanosMascotas = nombres.concat(mascotas);
console.log(humanosMascotas);

/* Copia de un fragmento de un arreglo */

const humanosMascotasCopy = humanosMascotas.slice(1,3);           // slice(desde, hasta) desde inclusivo, hasta exclusivo
console.log(humanosMascotasCopy);

/* Devolver la posicion de un elemento dado */

console.log(humanosMascotas);
console.log(humanosMascotas.indexOf("ezequiel"));
console.log(humanosMascotas.indexOf("juancito"));                   // devuelve -1 porque no se encuentra el elemento pasado por parametro

/* Verificar la existencia de un elemento en el arreglo */

console.log(humanosMascotas.includes("peggy"));                     // true porque "peggy" esta definido en el array 
console.log(humanosMascotas.includes("apolo"));                     // false porque "apolo" no esta definido en el array

/* Realizar el reverso de un arreglo */

console.log(humanosMascotas);
humanosMascotas.reverse();
console.log(humanosMascotas);

/* Eliminar elementos de un arreglo pero segun el nombre */

const productos = ["camisa", "zapato", "pantalon"];

const eliminar = (nombre) => {
    let indice = productos.indexOf(nombre);
    if(indice != -1){
        productos.splice(indice,1);
        console.log(productos);
    }
};

eliminar("zapato");
eliminar("peggy"); // No elimina nada porque no existe "peggy" en productos 


/********************** ARREGLOS + OBJETOS **********************/

const products = [
{id:1, nombre: "camisa", precio: 1000},    
{id:2, nombre: "zapato", precio: 1350},    
{id:3, nombre: "media", precio: 750},
{id:4, nombre: "gorra", precio: 345}
];

/* Uso de for of (only arrays) */

for(const item of products){
    console.log(item);                  // Lista cada objeto del arreglo products
    console.log(item.nombre);
    console.log(item.precio);
}

/* Utilizacion de clases */

class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const prods = [];
const prodCamisa = new Producto(1, "camisa", 12000);
const prodZapato = new Producto(2, "zapato", 28000);
const prodMedia = new Producto(3, "media", 3000);


prods.push(prodCamisa);
prods.push(prodZapato);
prods.push(prodMedia);
console.log(prods);


class Ciudadano{
    constructor(name, surname, dni, age, gender){
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.age = age;
        this.gender = gender;
    }
}

const padronElectoral = [];
const firstPerson = new Ciudadano("ezequiel", "sanchez", 38000000, 28, "masculino");
const secondPerson = new Ciudadano("camila", "rodriguez", 37000000, 27, "femenino");
const thirdPerson = new Ciudadano("andres", "velazquez", 36000000, 32, "no-binario");

padronElectoral.push(firstPerson);
padronElectoral.push(secondPerson);
padronElectoral.push(thirdPerson);

for(const info of padronElectoral){
    console.log(info);
}





