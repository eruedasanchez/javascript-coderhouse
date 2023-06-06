/* Clase numero 8. Bloque 1. Librerias */

let boton = document.getElementById("boton");

/******************************* Sweet Alert *******************************/


// Se imprime la alerta exportada de sweet alert al hacer click en el boton 

boton.addEventListener("click", () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
});

boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue?',
        icon: 'error',
        confirmButtonText: 'Cool'
    });
});

boton.addEventListener("click", () => {
    Swal.fire({
        position:'top-end', // lo ubica al alert en el extremo superior derecho
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: true,   // true muestra el boton de ok y false lo oculta
        timer: 1500 // milisegundos
    });
});

/* Insercion de imagenes */

boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400, 
        imageHeight: 200,
        imageAlt: 'Custom image',
    });
});

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


/******************************* Toastify *******************************/

boton.addEventListener("click", () => {
    Toastify({
        text: 'Probando Toast!',
        duration: 3000,             // Luego de los 3 segundos, se borra el cartel "probando toast!" 
        style: {
            background: "linear-gradient(to left, #00b09b, #96c92d)" // Agregar estilos con style
        },
    }).showToast();
});

boton.addEventListener("click", () => {
    Toastify({
        text: 'Probando Toast!',
        duration: 3000,             // Luego de los 3 segundos, se borra el cartel "probando toast!" 
        onClick: () => {
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
            }).showToast(); // Al clickear "Probando Toast!", sale otro cartel con la leyenda "Clickeaste un Toast!" 
        },
    }).showToast();
});

boton.addEventListener("click", () => {
    Toastify({
        text: 'Click aqui para ir a Coder!',
        duration: 3000,                             // Luego de los 3 segundos, se borra el cartel "probando toast!" 
        destination: "https://www.coderhouse.com/"  // Se redirecciona al sitio de coderhouse
    }).showToast();
});

/******************************* Luxon *******************************/

const DateTime = luxon.DateTime;
const dt = DateTime.local(2023, 12, 1);  
console.log(dt.c); // .c muestra la fecha con detalle de fecha y hora por consola
console.log(dt.toString()); //  toString() convierte toda la fecha a un string

const now = DateTime.now();
console.log(now.toString());
console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(now.second);
console.log(now.weekday);
console.log(now.zoneName);
console.log(now.daysInMonth);
console.log(now.toLocaleString()); // 5/6/2023
console.log(now.toLocaleString(DateTime.DATE_FULL)); // 5 de junio de 2023
console.log(now.toLocaleString(DateTime.TIME_SIMPLE)); // 21:27
console.log(now.setLocale('en').toLocaleString(DateTime.DATE_FULL)); // 'es' en español la fecha (5 de junio de 2023)

console.log(now.toLocaleString(DateTime.DATETIME_SHORT)); // 5/6/2023, 21:35

const suma = now.plus({hours: 1, minutes: 1});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT)); // 5/6/2023, 22:38

const resta = now.minus({month: 2, days: 1});
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)); // 4/4/2023, 21:37

const Interval = luxon.Interval;
const navidad = DateTime.local(2023, 12, 25);
const i = Interval.fromDateTimes(now, navidad);

console.log(i.length('days'));      // 202.091016875 dias desde hoy hasta navidad
console.log(i.length('hours'));     // 4850.184405 horas desde hoy hasta navidad
console.log(i.length('minutes'));   // 291011.0643 minutos desde hoy hasta navidad