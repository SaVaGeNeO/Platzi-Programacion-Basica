var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.webp",
  cargaOK: false
}

var vaca = {
  url: "vaca.webp",
  cargaOK: false
};

var pollo = {
  url: "pollo.webp",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.webp",
  cargaOK: false
};

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdos);



function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v = 0; v < cantidad; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c = 0; c < cantidad; c++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p = 0; p < cantidad; p++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
