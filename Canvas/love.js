var d = document.getElementById("amor");
var lienzo = d.getContext("2d");
var color = "red"

dibujarLinea(color, 210, 150, 240, 150);
dibujarLinea(color, 310, 150, 340, 150);
dibujarLinea(color, 240, 150, 275, 175);
dibujarLinea(color, 310, 150, 275, 175);
dibujarLinea(color, 210, 150, 180, 180);
dibujarLinea(color, 340, 150, 370, 175);
dibujarLinea(color, 180, 180, 180, 215);
dibujarLinea(color, 370, 175, 370, 215);
dibujarLinea(color, 180, 215, 275, 315);
dibujarLinea(color, 370, 215, 275, 315);

function dibujarLinea(color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
