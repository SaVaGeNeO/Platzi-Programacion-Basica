var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el home");
}
function cursos(peticion, resultado)
{
  resultado.send("Estos son los cursos");
}

app.listen(8989);
