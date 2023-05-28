/* Ejercicios clase 7. Operadores avanzados. Bloque 1 */

/* Operador++ */

let numero = 30;
numero = numero + 1
numero += 1;
numero++;
console.log(numero);

/* Operador ternario 

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa */

let edad = 20;

if(edad >= 18){
    console.log("Puedes entrar a la fiesta");
} else {
    console.log("No puedes entrar a la fiesta");
}

// Version con operador ternario

edad >= 18 ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta"); 

const usuario = {
    nombre: "andres",
    edad: 23,
};

if(usuario.edad > 18){
    permiso = true;
} else {
    permiso = false;
}

if(permiso){
    console.log("Puedes entrar a la fiesta");
} else {
    console.log("No puedes entrar a la fiesta");
}

// Version con operador ternario

let permiso = usuario.edad >= 18 ? true : false;
permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/*
Cuando tenemos operador1 && operador2 retorna operador2 cuando operador1 representa algo true. De lo contrario, retorna operador1  

Cuando tenemos operador1 || operador2 retorna operador2 cuando operador1 representa algo false. De lo contrario, retorna operador1
*/

const carrito = [];
if(carrito.length === 0){
    console.log("El carrito esta vacio");
}

carrito.length === 0 && console.log("El carrito esta vacio");

const usuarioUno = {
    nombre: "juan",
    edad: 21,
};

const registro = usuarioUno.edad >= 18 && new Date();
console.log(registro);

console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy prorque null se considera 0
console.log(undefined || "Falsy"); // Falsy prorque null se considera false
console.log("Hola mundo" || "Falsy"); // "Hola mundo" porque "Hola mundo" es true 
console.log("" || "Falsy"); // Falsy porque "" representa false
console.log(NaN || "Falsy");   // Falsy porque NaN representa false
console.log(true || "Falsy");  // true
console.log(false || "Falsy"); // Falsy

const usuarioDos = {
    nombre: "juan",
};

const usuariotres = null;

console.log(usuarioDos || "El usuario no existe"); // usuario1
console.log(usuarioTres || "El usuario no existe"); // "El usuario no existe"

let carritoDos;
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carritoDos = carritoStorage;
} else {
    carritoDos = [];
}

/* Version simplificada */

const carritoDosSimplificado = JSON.parse(localStorage.getItem("carrito")) || [];

/* Acceso condicional a un objeto */

const usuarioCuatro = null;

console.log(usuarioCuatro.nombre || "El usuario no existe"); // error porque no se puede acceder al nombre de un objeto null

// Lo solucionamos de la siguiente manera 

console.log(usuarioCuatro?.nombre || "El usuario no existe"); // el signo ? valida unicamente si el usuario es un objeto o cualquier propiedad que quiero acceder es un objeto

const usuarioCuatroSol = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
        javascript: "aprobado",
    },
};

console.log(usuarioCuatroSol?.cursos?.javascript || "La propiedad no existe"); // aprobado 

/* Desestructuracion */

// La desestructuracion se aplica mas sobre los objetos pero se puede aplicar tambien a los arreglos

const usuarioSeis = {
    nombre: "John Doe",
    edad: 22,
};

let nombreSeis = usuarioSeis.nombre;
let edadSeis = usuarioSeis.edad;

/* Manera realizada con desestructuracion */

let {nombreSeisDesestructurado, edadSeisDesestructurado} = usuario
console.log(nombreSeisDesestructurado, edadSeisDesestructurado);
console.log(nombreSeisDesestructurado);

const usuarioSiete = {
    nombre: "John Doe",
    edad: 32,
    telefonos: {
        cel: 1133344444,
        casa: null,
        trabajo: 113325555,
    },
};

const {nombre, telefonos:{cel}} = usuarioSiete;
console.log(nombre,cel);

const usuarios = [
    {id: 1, nombre: "juan"},
    {id: 2, nombre: "andres"},
    {id: 3, nombre: "octavio"},
    {id: 4, nombre: "pedro"},
];

usuarios.forEach((item) => {
    const {id,nombre} = item;
    console.log(id,nombre);
});

/* Desestructuracion de parametros */

const desestructurar = ({edad, nombre}) => {
    console.log(edad, nombre);
};

const usuarioOcho = {
    nombre: "John Doe",
    edad: 32,
    telefonos: {
        cel: 1133344444,
        casa: null,
        trabajo: 113325555,
    },
};

desestructurar(usuarioOcho);

/* Desestructuracion de arreglos (poco usado) */

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [a, ,b,c] = nombres;
console.log(a,b,c);             // ["Juan", "Carlos", "Mariela"]






