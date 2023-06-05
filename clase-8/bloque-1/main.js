/* Clase numero 8. Bloque 1. Librerias */

let boton = document.getElementById("boton");

// Sweet Alert


// Se imprime la alerta exportada de sweet alert al hacer click en el boton 

// boton.addEventListener("click", () => {
//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//     )
// });

// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue?',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//     });
// });

// boton.addEventListener("click", () => {
//     Swal.fire({
//         position:'top-end', // lo ubica al alert en el extremo superior derecho
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: true,   // true muestra el boton de ok y false lo oculta
//         timer: 1500 // milisegundos
//     });
// });

/* Insercion de imagenes */

// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: 'Sweet!',
//         text: 'Modal with a custom image',
//         imageUrl: 'https://unsplash.it/400/200',
//         imageWidth: 400, 
//         imageHeight: 200,
//         imageAlt: 'Custom image',
//     });
// });

boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Esta seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, no quiero',
    }).then(result => {
        if(result.isConfirmed){
            // codigo personalizado a ejecutar
            Swal.fire({
            title: 'Borrado!',
            icon: 'success',
            text: 'El archivo ha sido borrado',
            });
        }
    });
});