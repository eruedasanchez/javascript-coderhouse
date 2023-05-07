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

nombres.splice(0,1);                      
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






