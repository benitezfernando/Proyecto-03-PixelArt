var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");

colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
  var i = document.getElementById("indicador-de-color");
  i.style.backgroundColor = colorActual;
});

var paleta = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");
var mouse;

//Funcion para crear paleta de colores
function crearPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    ele = document.createElement("div");
    ele.className = "color-paleta";
    var st = ele.style;
    st.backgroundColor = nombreColores[i];
    paleta.appendChild(ele);
  }
}

function crearGrilla() {
  for (var i = 0; i <= 1750; i++) {
    var pixel = document.createElement("div");
    pixel.className = "clase-pixeles";
    grilla.appendChild(pixel);
  }
}

crearPaleta();
crearGrilla();

//Seleccionar un color en el indicador de colores
// var colorSeleccionado;
var selectColor = document.getElementById("paleta");
selectColor.addEventListener("click", modificarColor);
function modificarColor(e) {
  var c2 = document.getElementById("indicador-de-color");
  c2.style.backgroundColor = e.target.style.backgroundColor;
}

grilla.addEventListener("click", colorPixel);

function colorPixel(e) {
  var color = document.getElementById("indicador-de-color");
  e.target.style.backgroundColor = color.style.backgroundColor;
}

grilla.addEventListener("mousedown", mouseApretado);

function mouseApretado() {
  mouse = true;
  // console.log("mouse apretado "+mouse);
}

grilla.addEventListener("mouseup", mouseSoltar);
function mouseSoltar() {
  mouse = false;

  // console.log("mouse suelto "+mouse);
}

//Pintar continuo
grilla.addEventListener("mousemove", pintarContinuo);
var color = document.getElementById("indicador-de-color");
function pintarContinuo(e) {
  if (mouse) {
    e.target.style.backgroundColor = color.style.backgroundColor;
  }
}

//Boton borrar
var botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", fnBorrar);
function fnBorrar() {
  $("#grilla-pixeles div").animate({ "background-color": "white" }, 1500);
}

//Cargar superhéroes
var cargarBatman = document.getElementById("batman");
cargarBatman.addEventListener("click", fnBatman);
function fnBatman() {
  cargarSuperheroe(batman);
}

var cargarWonder = document.getElementById("wonder");
cargarWonder.addEventListener("click", fnWonder);
function fnWonder() {
  cargarSuperheroe(wonder);
}

var cargarFlash = document.getElementById("flash");
cargarFlash.addEventListener("click", fnFlash);
function fnFlash() {
  cargarSuperheroe(flash);
}

var cargarInvisible = document.getElementById("invisible");
cargarInvisible.addEventListener("click", fnInvisible);
function fnInvisible() {
  cargarSuperheroe(invisible);
}

//Boton guardar
var botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", fnGuardar);
function fnGuardar() {
  guardarPixelArt();
}
