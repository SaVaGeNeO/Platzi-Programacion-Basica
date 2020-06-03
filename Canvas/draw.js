var d = document.getElementById("draw");
var ancho = d.width;
var lienzo = d.getContext("2d");
var color = "black"
var l = 0;
var lineas = 30;
var yi, xf;

for(l = 0; l < lineas; l++)
{
  yi = 300 + (10 * l);
  xf = 600 - (10 * (l + 1));
  dibujarLinea(color, 600, yi, xf, 600);
}

for(l = 0; l < lineas; l++)
{
  yi = 300 - (10 * l);
  xf = 600 - (10 * (l + 1));
  dibujarLinea(color, 600, yi, xf, 0);
}

for(l = 0; l < lineas; l++)
{
  yi = 300 - (10 * l);
  xf = 10 * (l + 1);
  dibujarLinea(color, 0, yi, xf, 0);
}

for(l = 0; l < lineas; l++)
{
  yi = 300 + (10 * l);
  xf = 10 * (l + 1);
  dibujarLinea(color, 0, yi, xf, 600);
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea(color, 1, 1, 1, 599);
dibujarLinea(color, 1, 599, 599, 599);
dibujarLinea(color, 599, 599, 599, 1);
dibujarLinea(color, 599, 1, 1, 1);
