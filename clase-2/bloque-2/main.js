/* Clase 2. Bloque 2. Ciclos for y while */ 

for(let i=0; i < 100; i++){
    Repetir 100 veces el saludo "hola" 
    if(i === 99){
        console.log("Chau");
    } else {
        console.log("Hola");
    }
}

let numero = parseInt(prompt("Ingrese un numero"));
let resultado;
for(let i=1; i <= 5; i++){
    resultado = numero * i;
    alert(`El numero ${numero} multiplicado por ${i} es igual a ${resultado}`);

}

/* Sentencia break */

for(let i=0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

/* Sentencia continue */

for(let i=0; i < 10; i++){
    if(i === 5){
        continue; // saltea la condicion 
    }
    console.log(i);
}






