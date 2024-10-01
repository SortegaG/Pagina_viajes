// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();


// // LECTURA ID
// // Devuelve la etiqueta
// console.log(document.getElementById("miId4"));
// // Devuelve el contenido de la etiqueta
// console.log(document.getElementById("miId4").innerHTML);

// // ESCRITURA ID
// console.log(document.getElementById("miId4").innerHTML = "Macarrones") ;

// //---------------------------------------

// // LECTURA CLASES
// // Devuelve todo lo que tenga esa clases
// console.log(document.getElementsByClassName("miClase"));
// // Devuelve una específica
// elementos = document.getElementsByClassName("miClase")
// console.log(elementos[1].innerHTML);

// // Devuelve todos los de esa clase
// for (let i = 0; i < elementos.length; i++) {
//     console.log(elementos[i].innerHTML);
// }

// // ESCRITURA CLASES
// elementos[0].innerHTML = "Barrita tomate"

// //---------------------------------------

// // LECTURA TAGS
// console.log(document.getElementsByTagName("span"));

// //---------------------------------------

// // LECTURA QUERY SELECTOR
// console.log(document.querySelector("#miId4").innerHTML);
// //console.log(document.querySelector("div#miDiv span#miId4").innerHTML) es igual al anterior;

// // ESCRITURA QUERY SELECTOR
// document.querySelector("#miId4").innerHTML  = "Macarrones con tomatito";

// //---------------------------------------

// // LECTURA QUERY SELECTOR ALL
// console.log(document.querySelectorAll(".miClase"));
// console.log(document.querySelectorAll(".miClase")[3].innerHTML);
// console.log(document.querySelectorAll(".miClase").innerHTML); // Esto no funciona


// // ESCRITURA QUERY SELECTOR ALL
// document.querySelectorAll(".miClase")[3].innerHTML = "Macarrones con tomatito";


console.log(document.querySelectorAll("ul > .clase1 > a")[2].innerHTML); // tercer elemento
console.log("------------")

console.log(document.querySelector("ul > .clase1 > a").innerHTML); // sólo el primer elemento
console.log("------------")

console.log(document.querySelector("#titulo").innerHTML);
console.log("------------")

let enlaces = document.querySelectorAll("ul > .clase1 > a");

for (let i = 0; i < enlaces.length; i++) {
  console.log(enlaces[i].innerHTML);
  enlaces[i].href = "https://www.google.com/" + i;
}
console.log("------------")

// El segundo parámetro de addEventListener es la función de callback
//Función de callback: función que se ejecuta a raíz de otra acción

// pintar
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML += Date();
}

// borrar
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "";
});

function displayHideDate() {
  if (document.getElementById("demo2").innerHTML == "") {
    document.getElementById("demo2").innerHTML = Date();
  } else {
    // Fecha pintada previamente
    document.getElementById("demo2").innerHTML = "";
  }
}

document.getElementById("myBtn3").addEventListener("click",displayHideDate);


document.getElementById("myBtn3").addEventListener("click", displayHideDate);

document.getElementById("boton2").addEventListener("click", function () {
  console.error("Alerta de fusión en el núcleo");
  console.warn("Lean la documentación");
});

// Paso de valores por parámentro
let p1 = 5;
let p2 = 7;
let result = 0;

document.getElementById("boton3").addEventListener("click", function () {
  myFunction(10, 12);
});

function myFunction(a, b) {
  if (result == 0) {
    result = p1 + p2;
    document.getElementById("result2").innerHTML += " " + result;
  } else {
    alert("Ya se hizo la cuenta");
  }
}

/* Sobrecarga de eventos sobre mismo elemento HTML */
function sendAlert() {
  alert("Te fuiste y me dejaste!!!!!");
  document.getElementById("mensaje").style.color = "black";
  document.getElementById("mensaje").style.backgroundColor = "green";
}

function sayHello() {
  alert("Hola, te he echado de menos!!!!!");
  document.getElementById("mensaje").style.color = "blue";
  document.getElementById("mensaje").style.backgroundColor = "yellow";
}
document.querySelector("#mensaje").addEventListener("mouseout", sendAlert);

document.querySelector("#mensaje").addEventListener("mouseover", sayHello);

// Poner/quitar clase
document.querySelector("#boton4").addEventListener("click", function () {
  document.querySelector("#div1").classList.toggle("fondo");
});

document.querySelector("#texto").addEventListener("mouseover", function () {
  document.querySelector("h3").classList.toggle("fondo");
});
document.querySelector("#texto").addEventListener("mouseout", function () {
  document.querySelector("h3").classList.toggle("fondo");
});