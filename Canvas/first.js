var d = document.getElementById('first');
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
  yi  = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(color, 0, yi, xf, 300);
  dibujarLinea(color, 300, yi, xf, 0);

  l++
}

dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299);
dibujarLinea(color, 299, 299, 299, 1);
dibujarLinea(color, 299, 1, 1, 1);
