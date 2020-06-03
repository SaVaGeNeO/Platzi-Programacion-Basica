var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var color;

dibujarLinea("black", 1, 1, 1, 499);
dibujarLinea("black", 1, 499, 499, 499);
dibujarLinea("black", 499, 499, 499, 1);
dibujarLinea("black", 499, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, xf2;
  var espacio = ancho / lineas;

  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xf2 = espacio * (lineas - l);
    dibujarLinea("#66ff66", 0, yi, xf, 500);
    dibujarLinea("yellow", 500, yi, xf, 0);
    dibujarLinea("#9a84f6", 0, yi, xf2, 0);
    dibujarLinea("#ffa3a3", 500, yi, xf2, 500);
    console.log("Linea " + 1);
    l++;

  }


}
