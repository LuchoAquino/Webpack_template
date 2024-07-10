import _ from "lodash";
import "./assets/css/style.css";
import Icon from "./assets/images/logouni.png"; //  Webpack manejará esta importación y convertirá el archivo de imagen en una URL
import printMe from "./print.js";
import another from "./another-module.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["HOLotaa", "tobiaata tea"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and checssk the console!";
  btn.onclick = printMe;

  const myImage = new Image(); // crea un nuevo elemento de imagen (<img>)
  myImage.src = Icon; // asigna la URL de la imagen al atributo src del elemento de imagen
  element.appendChild(myImage); // añade el elemento de imagen (myImage) como un hijo del elemento div (element)

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
