var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var color = "#52ff77"

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
    dibujarLinea(color, 0, yi, xf, 300);
    dibujarLinea(color, 300, yi, xf, 0);
    dibujarLinea(color, 0, yi, xf2, 0);
    dibujarLinea(color, 300, yi, xf2, 300);
    console.log("Linea " + 1);
    l++;

  }

  dibujarLinea(color, 1, 1, 1, 299);
  dibujarLinea(color, 1, 299, 299, 299);
  dibujarLinea(color, 299, 299, 299, 1);
  dibujarLinea(color, 299, 1, 1, 1);
}
