var cruz = document.getElementById('cruz');
var haz = document.getElementById('haz');
var ojo = document.getElementById('ojo');
cruz.addEventListener("click", dibujarCruz);
haz.addEventListener("click", dibujarHaz);
ojo.addEventListener("click", dibujarOjo);

var d = document.getElementById('first');
var lienzo = d.getContext("2d");
var color;

var l = 0;
var lineas = 30;

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 299);
dibujarLinea("black", 299, 299, 299, 1);
dibujarLinea("black", 299, 1, 1, 1);

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
  yi = 1;
  yf = 300;
  xi = l * 20;
  xf = l * 20;
  dibujarLinea("#bdbdbd", xi, yi, xf, yf);
  l++
  xi = 1;
  xf = 300;
  yi = l * 20;
  yf = l * 20;
  dibujarLinea("#bdbdbd", xi, yi, xf, yf);


}
function dibujarCruz()
{
  for(l = 0; l < lineas; l++)
  {
    yi = 10 * l;
    yf = 10 * (l + 1);
    xi = 140;
    xf = 160;
    dibujarLinea("black", xi, yi, xf, yf);
    yi = 10 * (l + 1);
    yf = 10 * l;
    xi = 140;
    xf = 160;
    dibujarLinea("black", xi, yi, xf, yf);
    yi = 140;
    yf = 160;
    xi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("black", xi, yi, xf, yf);
    yi = 140;
    yf = 160;
    xi = 10 * (l + 1);
    xf = 10 * l;
    dibujarLinea("black", xi, yi, xf, yf);
  }
}
function dibujarHaz()
{
  for(l = 0; l < 30; l++)
  {
    yi = 10 * l;
    yf = 0;
    xi = 10 * (l + 1);
    xf = 300;
    dibujarLinea("gold", xi, yi, xf, yf);
    yi = 10 * l;
    yf = 300;
    xi = 10 * (l + 1);
    xf = 0;
    dibujarLinea("purple", xi, yi, xf, yf);
  }
}
function dibujarOjo()
{
  for(l = 0; l < 30; l++)
  {
    yi = 10 * l;
    yf = 0;
    xi = 300;
    xf = 10 * (l + 1);
    dibujarLinea("brown", xi, yi, xf, yf);
    yi = 10 * l;
    yf = 0;
    xi = 10 * (l + 1);
    xf = 300;
    dibujarLinea("brown", xi, yi, xf, yf);
    yi = 10 * l;
    yf = 300;
    xi = 0;
    xf = 10 * (l + 1);
    dibujarLinea("#755cdb", xi, yi, xf, yf);
    yi = 10 * l;
    yf = 300;
    xi = 10 * (l + 1);
    xf = 0;
    dibujarLinea("#755cdb", xi, yi, xf, yf);
    dibujarLinea("gold", 120, 120, 120, 180);
    dibujarLinea("gold", 180, 120, 180, 180);
    dibujarLinea("gold", 120, 120, 180, 120);
    dibujarLinea("gold", 120, 180, 180, 180);
    dibujarLinea("gold", 150, 120, 150, 180);
    dibujarLinea("gold", 120, 150, 150, 180);
    dibujarLinea("gold", 120, 150, 150, 120);
    dibujarLinea("gold", 150, 180, 180, 150);
    dibujarLinea("gold", 150, 120, 180, 150);
    dibujarLinea("gold", 120, 150, 180, 150);

  }
}
