// Funciones de la web

function crearTitulo(i) {
    const h2 = document.createElement('h2');  // Crea un h2
    h2.id = `titulo-${i}`  // le proporciona un id en funcion del parametro que le indiquemos a la funcion
    document.body.appendChild(h2)  // Introduce el h2 dentro del body
}

function crearSection(i) {

    const section = document.createElement('section');  // creamos las etiquetas section, div y img
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.id = `div-${i}`; // Les damos un id en funcion del parametro que le demos a la funcion
    img.id = `img-${i}`;

    div.appendChild(img);  // Introducimos la img --> div --> section -->body
    section.appendChild(div);
    document.body.appendChild(section);
}

function CrearSelector(id) {  
    const section = document.createElement('section');  // Creamos un nuevo section y un div
    const div = document.createElement('div');  
    div.id = id;  // Le añadimos un id al nuevo div (usamos el argumento id)
    section.appendChild(div);  // Introducimos el div --> section --> body
    document.body.appendChild(section);  
}

//  Arrays

const imagenes = [  // Array para introducir imagenes
    'viajes/viajes-1.jpg', 
    'viajes/viajes-2.jpg', 
    'viajes/viajes-3.jpg'  
];

const parrafos = [  // Array para introducir los parrafos
    'Tomando el sol',
    'Aquí también puedes tomar el sol',
    'Y aquí, más de lo mismo'
];

const titulos = [  // Array para introducir los h2
    'Viaje 1',
    'Viaje 2',
    'Viaje 3'
];

// A partir de aquí, comienza la modificacion

crearTitulo(1); // Titulo Bienvenidos
    const newTittle1 = document.getElementById('titulo-1');
    newTittle1.textContent = 'Bienvenidos';

crearSection(1); // Imagen BANNER
    const newImg1 = document.getElementById('img-1')
    newImg1.src = "banner/1.jpg";

crearTitulo(2); // Titulo Recomendados
    const newTittle2 = document.getElementById('titulo-2');
    newTittle2.textContent = 'Bienvenidos';

const newSection2 = document.createElement('section');  // creacion de un nuevo section y su etiqueta id
newSection2.id = 'contenedor'

for (let i = 0; i < 3; i++) {  // Bucle for que ocurre 3 veces

    const div = document.createElement('div');  // Variables de creacion de div, img, p y h3
    const img = document.createElement('img');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');

    h3.innerText = titulos[i];  // Introduccion de los textos e imagenes de los arrays en cada posicion de i
    p.innerText = parrafos[i];
    img.src = imagenes[i];

    div.appendChild(img); // Introduce una nueva imagen --> div
    div.appendChild(h3);  // Introduce un h3 --> div
    div.appendChild(p);  // Introduce un p --> del div
    

    div.id = `div-${i+1}`;  // Añade un id al div creado
    img.id = `img-${i+1}`;  // Añade un id a la imagen

    newSection2.appendChild(div); // Introduce el div creado dentro de la section2, y vuelta a empezar
    document.body.appendChild(newSection2); // Introduce el section creado despues del bucle dentro del body
}

crearTitulo(3); // Titulo Destinos
    const newTittle3 = document.getElementById('titulo-3');
    newTittle3.innerText = 'Destinos';

CrearSelector('contenedor-selector');  // Llamada a la funcion crearSelector

const destinos = ['Playa', 'Ciudad', 'Montaña'];  // Array de la lista de seleccion

const selection = document.createElement('select');  // Creacion de elemento select con id
selection.id = ('desplegable');

for (let i = 0; i < destinos.length; i++) {  
    const opcion = document.createElement('option');  // Creamos el elemento option
    opcion.value = i + 1;                   // Asigna un valor a la opcion
    opcion.textContent = destinos[i];  // Le añadimos a la opcion el texto en la posicion i
    selection.appendChild(opcion);  // añadimos la opcion al selector
}

document.getElementById('contenedor-selector').appendChild(selection);