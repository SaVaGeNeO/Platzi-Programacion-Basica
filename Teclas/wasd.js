var teclas = {
  W: 87,
  S: 83,
  A: 65,
  D: 68
}



document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);
dibujarLinea("red", 1, 1, 299, 1, papel);
dibujarLinea("red", 1, 1, 1, 299, papel);
dibujarLinea("red", 1, 299, 299, 299, papel);
dibujarLinea("red", 299, 1, 299, 299, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colors = "blue";
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.W:
      dibujarLinea(colors, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.S:
      dibujarLinea(colors, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.A:
      dibujarLinea(colors, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.D:
      dibujarLinea(colors, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }
}
