var d = document.getElementById('both');
var lienzo = d.getContext("2d");
var color;
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
  dibujarLinea("#66ff66", 0, yi, xf, 300);
  dibujarLinea("yellow", 300, yi, xf, 0);

  xi = 10 * (lineas - l);
  yf = 10 * (l + 1);
  dibujarLinea("#9a84f6", xi, 0, 0, yf);
  dibujarLinea("#ffa3a3", xi, 300, 300, yf);
  l++
}

dibujarLinea("#9a84f6", 1, 1, 1, 299);
dibujarLinea("#66ff66", 1, 299, 299, 299);
dibujarLinea("#ffa3a3", 299, 299, 299, 1);
dibujarLinea("yellow", 299, 1, 1, 1);
