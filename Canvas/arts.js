var d = document.getElementById("draw");
var ancho = d.width;
var lienzo = d.getContext("2d");
var color;
var l = 0;
var lineas = 30;
var yi, xf;

for(l = 0; l < lineas; l++)
{
  yi = 300 + (10 * l);
  xf = 600 - (10 * (l + 1));
  dibujarLinea("red", 600, yi, xf, 600);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 + (10 * (lineas - l));
  yf = 600 - (10 * (l + 1));
  dibujarLinea("red", xi, 600, 300, yf);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 + (10 * (lineas - l));
  yf = 600 - (10 * (l + 1));
  dibujarLinea("red", xi, 300, 600, yf);
}
for(l = 0; l < lineas; l++)
{
  yi = 300 - (10 * l);
  xf = 600 - (10 * (l + 1));
  dibujarLinea("blue", 600, yi, xf, 0);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 + (10 * (lineas - l));
  yf = 10 * (l + 1);
  dibujarLinea("blue", xi, 0, 300, yf);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 + (10 * (lineas - l));
  yf = 10 * (l + 1);
  dibujarLinea("blue", xi, 300, 600, yf);
}
for(l = 0; l < lineas; l++)
{
  yi = 300 - (10 * l);
  xf = 10 * (l + 1);
  dibujarLinea("green", 0, yi, xf, 0);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 - (10 * (lineas - l));
  yf = 10 * (l + 1);
  dibujarLinea("green", xi, 300, 0, yf);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 - (10 * (lineas - l));
  yf = 10 * (l + 1);
  dibujarLinea("green", xi, 0, 300, yf);
}
for(l = 0; l < lineas; l++)
{
  yi = 300 + (10 * l);
  xf = 10 * (l + 1);
  dibujarLinea("black", 0, yi, xf, 600);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 - (10 * (lineas - l));
  yf = 600 - (10 * (l + 1));
  dibujarLinea("black", xi, 600, 300, yf);
}
for(l = 0; l < lineas; l++)
{
  xi = 300 - (10 * (lineas - l));
  yf = 600 - (10 * (l + 1));
  dibujarLinea("black", xi, 300, 0, yf);
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

dibujarLinea("black", 1, 1, 1, 599);
dibujarLinea("black", 1, 599, 599, 599);
dibujarLinea("black", 599, 599, 599, 1);
dibujarLinea("black", 599, 1, 1, 1);
