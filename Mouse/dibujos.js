var cuadro = document.getElementById("area")
var hoja = cuadro.getContext("2d");
var xi, yi, xf, yf, click;
var color = "aqua"

cuadro.addEventListener("mousedown", clickD);
cuadro.addEventListener("mouseup", clickU);
cuadro.addEventListener("mousemove", clickM);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function clickD(evento1)
{
  click=true;
  xi = evento1.layerX;
  yi = evento1.layerY
}

function clickM(evento2)
{
  if(click)
  {
    xf = evento2.layerX;
    yf = evento2.layerY;
    dibujarlinea(color, xi, yi, xf, yf, hoja)
    xi = xf;
    yi = yf;
  }
}

function clickU(evento3)
{
  click = false;
}

dibujarlinea("aqua", 1, 1, 499, 1, hoja);
dibujarlinea("aqua", 1, 499, 499, 499, hoja);
dibujarlinea("aqua", 499, 1, 499, 499, hoja);
dibujarlinea("aqua", 1, 1, 1, 499, hoja);
