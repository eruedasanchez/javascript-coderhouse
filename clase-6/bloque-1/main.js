/* Clase 6. Eventos. Bloque 1 */

// let boton = document.getElementById("boton"); // Acceso al boton

// const respuesta = () => {
//     console.log("click");
// }

// Primera forma de agregar un evento
// boton.addEventListener("click", respuesta);  // Primer parametro nombre del evento y segundo parametro, declaracion de la funcion

// Segunda forma de agregar un evento
// boton.onclick = respuesta;                      // Tambien se asgina la declaracion de la funcion

// let evento = prompt("Ingrese el nombre del evento.")
// boton.addEventListener(evento, respuesta); // evento dblclick = doble click

// let boton = document.getElementById("boton"); // Acceso al boton

// const respuesta = (nombre) => {
//     alert(`Hola ${nombre}`);
// }

// boton.addEventListener("click", () => respuesta("pepe"));           // Forma de declarar cuando tengo al menos un parametro

/************ EVENTOS MAS COMUNES EN MOUSE EN JS ************/

// let boton = document.getElementById("boton"); 
// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => console.log("mousedown")); // mousedown ejecuta el evento al hacer click pero sin necesidad de soltar el click

// boton.addEventListener("mouseup", () => console.log("mouseup")); // mouseup ejecuta el evento recien al hacer click y soltar el click

// boton.addEventListener("mouseover", () => console.log("mouseover")); // mouseover ejecuta el evento al pararse sobre el boton

// boton.addEventListener("mouseout", () => console.log("mouseout")); // mouseout ejecuta el evento al pararse sobre el boton y luego salir

// boton.addEventListener("mousemove", () => console.log("mousemove")); // mousemove ejecuta el evento unicamente al pararse sobre el boton

// boton.addEventListener("click", () => console.log("click")); // click ejecuta el evento unicamente al clickear sobre el boton

// boton.addEventListener("dblclick", () => console.log("dblclick")); // dblclick ejecuta el evento unicamente al realizar doble click sobre el boton

// boton.addEventListener("mousedown", () => {
// saludo.className = "amarillo"
// }); 
// boton.addEventListener("mouseup", () => {
// saludo.className = "azul"
// }); 
// boton.addEventListener("mouseover", () => {
// saludo.className = "rojo"
// });
// boton.addEventListener("mouseout", () => {
// saludo.className = "verde"    
// });

/************ EVENTOS MAS COMUNES EN TECLADO EN JS ************/

// let saludo = document.getElementById("saludo");
// let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown")); // contador de teclas que fueron presionadas
// nombre.addEventListener("keyup", () => console.log("keyup")); // contador de teclas que fueron presionadas y soltadas. Si solo fueron presionadas, no se cuentan hasta que sean soltadas 

// nombre.addEventListener("keyup", (e) => {
//     console.log(e.key);  // e brinda informacion sobre la tecla que presiono el usuario y el metodo .key permite saber la tecla que fue presionada por el usuario
// });

// nombre.addEventListener("keyup", (e) => {
//     if(e.key == "a"){
//         saludo.className = "amarillo";
//     } else if(e.key == "s"){
//         saludo.className = "azul";
//     } else if(e.key == "d" ){
//         saludo.className = "rojo";
//     } else {
//         saludo.className = "verde";
//     }
// });

// nombre.addEventListener("change", () => console.log("change")); // Al clikear fuera del input, se produce un change

// nombre.addEventListener("input", () => {
//     console.log(nombre.value); // reconocimiento de cada caracter que se pulsa
// });

// nombre.addEventListener("input", () => {
//     if(!nombre.value.includes("@")){
//         saludo.className = "rojo";
//     } else {
//         saludo.className = "verde";
//     }
// });

/************ CREACION DE FORMULARIOS ************/

let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", () => {
//     console.log("Hola a todos");                // Se borra todo porque el comportamiento por defecto de los formularios es restaurarse 
// });

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();            // preventDefault() evita que se borra toda la informacion del formulario (que se restaure)
    // console.log("Hola a todos");
    let inputs = e.target.children; // muestra la cantidad de hijos que tiene el diccionario
    // console.log(inputs);
    // console.log(inputs[0].value);
    
    // if(!inputs[0].value.includes("@")){
    //     inputs[0].value = "";
    //     let div = document.createElement("div");
    //     div.innerHTML = "No esta el @";
    //     document.body.append(div);  // Agrega al html un mensaje avisando que no se escribio el arroba
    // }
// });


/*************** A medida que se van agregando los datos, se colocan en un div y se muestran ***************/

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;

    let info = document.getElementById("info");
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Nombre: ${inputs[0].value} </h2>
    <b>Edad: ${inputs[1].value} </b>
    `;
    info.append(div);
});
