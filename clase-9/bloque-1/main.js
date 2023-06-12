/* Clase 9. Bloque 1. Ajax & Fetch */

/* Fetch. fetch(url,config) */ 

// Metodo que nos permite hacer peticiones http a una API por ejemplo

fetch('https://jsonplaceholder.typicode.com/posts') // Al no pasar el segundo parametro (config), el fetch() por defecto hace un GET a la url pasada por parametro

fetch('https://jsonplaceholder.typicode.com/posts') // conexion con la API
    .then((response) => response.json())            // obtener la info de la API
    .then((data) => console.log(data));             // mostrar la info de la API


/* Colocar en index.HTML el titulo y la descripcion de la informacion contenida en la API */

let lista = document.getElementById('listado');

fetch('https://jsonplaceholder.typicode.com/posts') 
    .then((response) => response.json())            
    .then((response) => {
        response.forEach(publicacion => {
            let li = document.createElement('li');
            li.innerHTML = `
            <h2>${publicacion.title}</h2>
            <p>${publicacion.body}</p>
            `;
            lista.append(li);
        });
});

/* Crear una publicacion nueva (mediante POST) */

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'Publicacion coder',
    body: 'Nuestra primera publicacion',
    userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data));

/* Otra API. The Rick and Morty API */

let container = document.getElementById('container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
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
    });