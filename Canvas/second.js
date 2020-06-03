var d = document.getElementById('second');
var lienzo = d.getContext("2d");
var color = "black";
var lineas = 30;
var l = 0;

function dibujarLinea(color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

while(l < lineas)
{
  xi = 10 * (lineas - l);
  yf = 10 * (l + 1);
  dibujarLinea(color, xi, 0, 0, yf);
  dibujarLinea(color, xi, 300, 300, yf);
  l++
}

dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299);
dibujarLinea(color, 299, 299, 299, 1);
dibujarLinea(color, 299, 1, 1, 1);
