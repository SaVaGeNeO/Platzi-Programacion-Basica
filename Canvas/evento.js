var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);
var colors = document.getElementById('colorcito');
var botons = document.getElementById('botoncit');
botons.addEventListener("click", dibujoPorClick);

var d = document.getElementById('first');
var lienzo = d.getContext("2d");
var ancho = d.width;
var color;

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

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var espacio = ancho / lineas;
  var color = colors.value;

  while(l < lineas)
  {
    yi  = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(color, 0, yi, xf, 300);
    dibujarLinea(color, 300, yi, xf, 0);
    xi = espacio * (lineas - l);
    yf = espacio * (l + 1);
    dibujarLinea(color, xi, 0, 0, yf);
    dibujarLinea(color, xi, 300, 300, yf);

    l++
  }
}
