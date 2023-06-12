let lista = document.getElementById('listado');

// fetch("./data.json")
// .then((response) => response.json())
// .then((data) => {
//     data.forEach((producto) => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <h2>${producto.nombre}</h2>
//         <p>${producto.precio}</p>
//         <p>${producto.id}</p>
//         `;
//         lista.append(li);
//     });
// });

let container = document.getElementById('container');

const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');     // await espera que responda el fetch antes de continuar la ejecucion del programa. Como await solo se permite con funciones asincronas declaro "async" en la funcion  
    const data = await response.json();

    let characters = data.results;
    characters.forEach(character => {
        let div = document.createElement('div');
        div.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}">
            <p>${character.gender}</p>
            <p>${character.status}</p>
            `;

        container.append(div);
        });
};

/* Con async y await es como mas se utiliza hoy en dia */ 

getCharacters();