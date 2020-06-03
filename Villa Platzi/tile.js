var g = document.getElementById("game");
var papel = g.getContext("2d");

var fondo = {
  url: "tile.webp",
  cargaOK: false
}
 var vaca = {
   url: "vaca.webp",
   cargaOK: false
 }

 var cerdo = {
   url: "cerdo.webp",
   cargaOK: false
 }

 var pollo = {
   url: "pollo.webp",
   cargaOK: false
 }

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


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

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
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
    papel.drawImage(vaca.imagen, 50, 50);
  }
  if(pollo.cargaOK)
  {
    papel.drawImage(pollo.imagen, 100, 100);
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, 150, 150);
  }

}
