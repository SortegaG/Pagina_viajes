// Creacion del primer div BIENVENIDOS Y FOTO PRINCIPAL
const newSection = document.createElement('section');
const newDiv = document.createElement('div');

const newH2 = document.createElement('h2'); // creacion de un h2 con texto
newH2.textContent = 'Bienvenidos';

const newImg1 = document.createElement('img'); // creacion de una img con ruta de imagen
newImg1.src = "banner/1.jpg";
newImg1.id = ('imagen-grande');

newSection.appendChild(newH2);  // Introducimos en la section un h2
newSection.appendChild(newDiv); // Introducimos en la section un div
newDiv.appendChild(newImg1);  // Introducimos en el div una img

document.body.appendChild(newSection)  // Introducimos la seccion dentro del body


// Creacion del segundo div RECOMENDADOS Y 3 IMAGENES

const newSection2 = document.createElement('section');  // creacion de un nuevo section y su etiqueta id
newSection2.id = 'contenedor'

const newDiv2 = document.createElement('div');  // Nueno elemento div
const newH22 = document.createElement('h2');  // Nuevo elemento h2
newH22.textContent = 'Recomendados';

document.body.appendChild(newH22);  // creacion de un nuevo h2 con texto


const imagenes = [  // Array para introducir imagenes
    'viajes/viajes-1.jpg', 
    'viajes/viajes-2.jpg', 
    'viajes/viajes-3.jpg'  
];

const parrafos = [  // Array para introducir los parrafos
    'Tomando el sol',
    'Aquí también puedes tomar el sol',
    'Y aquí, más de lo mismo'
]

const titulos = [  // Array para introducir los h2
    'Viaje 1',
    'Viaje 2',
    'Viaje 3'
]


for (let i = 0; i < 3; i++) {  // Bucle for que ocurre 3 veces

    const newDiv2 = document.createElement('div');  // Variables de creacion de div, img, p y h3
    const newImg2 = document.createElement('img');
    const newP2 = document.createElement('p');
    const newh3 = document.createElement('h3');

    newh3.innerText = titulos[i];  // Introduccion de los textos e imagenes de los arrays en cada posicion de i
    newP2.innerText = parrafos[i];
    newImg2.src = imagenes[i];

    newDiv2.appendChild(newImg2); // Introduce una nueva imagen dentro del div
    newDiv2.appendChild(newh3);  // Introduce un h3 dentro del div
    newDiv2.appendChild(newP2);  // Introduce un p dentro del div
    

    newDiv2.id = `div-${i+1}`;  // Añade un id al div creado
    newImg2.id = `img-${i+1}`;  // Añade un id a la imagen

    newSection2.appendChild(newDiv2); // Introduce el div creado dentro de la section2, y vuelta a empezar
    
}

document.body.appendChild(newSection2); // Introduce el section creado despues del bucle dentro del body


// Creacion del desplegable destinos

const newh23 = document.createElement('h2');
newh23.innerText = ('Destinos');

document.body.appendChild(newh23);

const newSection3 = document.createElement('section');  // Creamos un nuevo section
const newDiv3 = document.createElement('div');  // Creamos un nuevo div
newDiv3.id = 'contenedor-selector';  // Le añadimos un id al nuevo div
newSection3.appendChild(newDiv3);  // Introducimos el div dentro del section

document.body.appendChild(newSection3);  // Introducimos el section en el body

const selection = document.createElement('select');  // Creacion de elemento select con id
selection.id = ('desplegable');

const destinos = ['Playa', 'Ciudad', 'Montaña'];  // Array de la lista de seleccion

for (let i = 0; i < destinos.length; i++) {  
    const opcion = document.createElement('option');  // Creamos el elemento option
    opcion.value = i + 1;                   // Asigna un valor a la opcion
    opcion.textContent = destinos[i];  // Le añadimos a la opcion el texto en la posicion i
    selection.appendChild(opcion);  // añadimos la opcion al selector
}

document.getElementById('contenedor-selector').appendChild(selection);