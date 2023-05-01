/****************** Clase 3, bloque 2. Objetos ******************/

/*
const persona = {
    nombre: "Pepe",
    edad: 45,
    direccion: "Calle falsa 123",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
// Otra manera de solicitar los datos 
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["direccion"]);
*/

// Diferencias entre declarar de una manera y otra. Veamos el siguiente codigo

/* 
const persona = {
    nombre: "Pepe",
    edad: 45,
    direccion: "Calle falsa 123",
};

let clave = "nombre";

console.log(persona.clave); // undefined porque en persona no existe ningun atributo que se llame "clave"
console.log(persona[clave]); // retorna pepe porque clave tiene asignado el valor "nombre" y en persona esta declarado el atributo "nombre" con valor pepe
*/

/*
const persona = {
    nombre: "Pepe",
    edad: 45,
    direccion: "Calle falsa 123",
};

let clave = "nombre";

console.log(persona.clave); // undefined porque en persona no existe ningun atributo que se llame "clave"
console.log(persona[clave]); // retorna pepe porque clave tiene asignado el valor "nombre" y en persona esta declarado el atributo "nombre" con valor pepe

// Puedo seguir declarando atributos 
persona.altura = 1.90;
persona["peso"] = 54;

console.log(persona);
*/

/**************************** FUNCIONES CONSTRUCTORAS ****************************/

/*
function Persona(nombrePersona, edadPersona, direccionPersona){
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.direccion = direccionPersona;
}

const primerPersona = new Persona("pepe",45,"Calle falsa 123");
console.log(primerPersona);
console.log(primerPersona.nombre);
console.log(primerPersona.edad);
console.log(primerPersona.direccion);
*/

/* Otra forma de escribir la funcion constructora de manera mas compacta */

function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
}

const primerPersona = new Persona({
    nombre: "pepe",
    edad: 45,
    direccion: "Calle falsa 123"
});

console.log(primerPersona);
console.log(primerPersona.nombre);
console.log(primerPersona.edad);
console.log(primerPersona.direccion);

