var imagenes = [];
imagenes["Cauchin"] = "vaca.webp"
imagenes["Pokacho"] = "pollo.webp"
imagenes["Tocinauro"] = "cerdo.webp"

class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br/>")
    document.write("Vida: " + this.vida + "<br/>");
    document.write("Ataque: " + this.ataque + "<hr/>")
    document.write("</p>");
  }
}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 40));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion)
{
  pakin.mostrar();
}
