var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");
var xi, yi, xf, yf, click;
var color;

dibujarlinea("green", 1, 1, 499, 1, papel);
dibujarlinea("green", 1, 499, 499, 499, papel);
dibujarlinea("green", 499, 1, 499, 499, papel);
dibujarlinea("green", 1, 1, 1, 499, papel);



 cuadro.addEventListener("mousedown", mouseDown);
 cuadro.addEventListener("mouseup", mouseUp);
 cuadro.addEventListener("mousemove", mouseMove);

 function mouseDown(evento1)
  {
    click = true;
    xi = evento1.layerX;
    yi = evento1.layerY;
  }
function mouseMove(evento2)
  {
    if(click)
    {
      xf = evento2.layerX;
      yf = evento2.layerY
      dibujarlinea(color, xi, yi, xf, yf, papel)
      xi = xf;
      yi = yf;
    }
  }

function mouseUp(evento3)
  {
    click = false;
  }


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
