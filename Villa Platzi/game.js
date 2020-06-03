var d = document.getElementById('game');
var sheet = d.getContext("2d");

var cowRandom = myRandom(1, 15);
var pigRandom = myRandom(1, 15);

document.addEventListener("keydown", moveChicken);

var xChicken = myRandom(0, 420);
var yChicken = myRandom(0, 420);

function drawAgain()
{
  var i;
  sheet.drawImage(map.image, 0, 0);
  for(i = 0; i < cowRandom; i++)
  {
    sheet.drawImage(cow.image, cowPositions.cowPosX[i], cowPositions.cowPosY[i]);
  }
  for(i = 0; i < pigRandom; i++)
  {
    sheet.drawImage(pig.image, pigPositions.pigPosX[i], pigPositions.pigPosY[i]);
  }
  sheet.drawImage(chicken.image, xChicken, yChicken);
}

function loadMap()
{
  map.loadOK = true;
  draw();
}
function loadCow()
{
  cow.loadOK = true;
  draw();
}
function loadPig()
{
  pig.loadOK = true;
  draw();
}
function loadChicken()
{
  chicken.loadOK = true;
  draw();
}

function moveChicken(evento)
{
  var range = 10;

  switch(evento.keyCode)
  {
    case teclas.UP:
    if(yChicken >= -20)
    {
      yChicken = yChicken - range;
    }
    else
    {
      yChicken = yChicken
    }
    drawAgain();
    break;

    case teclas.DOWN:
    if(yChicken < 440)
    {
      yChicken = yChicken + range;
    }
    else
    {
      yChicken = yChicken
    }
    drawAgain();
    break;
    case teclas.LEFT:
    if(xChicken >= -10)
    {
      xChicken = xChicken - range;
    }
    else
    {
      xChiken = xChiken
    }
    drawAgain();
    break;
    case teclas.RIGHT:
    if(xChicken < 440)
    {
      xChicken = xChicken + range;
    }
    else
    {
      xChiken = xChiken
    }
    drawAgain();
    break;
  }
}

var map = {
  url: "tile.webp",
  loadOK: false
}

var cow = {
  url: "vaca.webp",
  loadOK: false
}

var pig = {
  url: "cerdo.webp",
  loadOK: false
}

var chicken = {
  url: "pollo.webp",
  loadOK: false
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var cowPositions = {
  cowPosX: [],
  cowPosY: []
}
var pigPositions = {
  pigPosX: [],
  pigPosY: []
}

map.image = new Image();
map.image.src = map.url;

cow.image = new Image();
cow.image.src = cow.url;

pig.image = new Image();
pig.image.src = pig.url;

chicken.image = new Image();
chicken.image.src = chicken.url;

map.image.addEventListener("load", loadMap);
cow.image.addEventListener("load", loadCow);
pig.image.addEventListener("load", loadPig);
chicken.image.addEventListener("load", loadChicken);

function myRandom(min, max)
{
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function draw()
{
  var i, x, y;

  if(map.loadOK)
  {
    sheet.drawImage(map.image, 0, 0);
  }
  if(cow.loadOK)
  {
    for(i = 0; i < cowRandom; i++)
    {
      x = myRandom(0, 7);
      y = myRandom(0, 7);
      x = x * 60;
      y = y * 60;
      sheet.drawImage(cow.image, x, y);
      cowPositions.cowPosX[i] = x;
      cowPositions.cowPosY[i] = y;
    }
  }
  if(pig.loadOK)
  {
    for(i = 0; i < pigRandom; i++)
    {
      x = myRandom(0, 7);
      y = myRandom(0, 7);
      x = x * 60;
      y = y * 60;
      sheet.drawImage(pig.image, x, y);
      pigPositions.pigPosX[i] = x;
      pigPositions.pigPosY[i] = y;
    }
  }
  if(chicken.loadOK)
  {
    sheet.drawImage(chicken.image, xChicken, yChicken);
  }
}
