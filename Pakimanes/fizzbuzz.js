var numeros = 100;
for(i = 1; i <= 100; i++)
{
  var i;
  if( i % 3 == 0 && i % 5 == 0)
  {
    document.write("Fizzbuzz");
  }
  else if( i % 3 == 0)
  {
    document.write("Fizz");
  }
  else if( i % 5 == 0)
  {
    document.write("Buzz");
  }
  else
  {
    document.write(i);
  }
  document.write("<br/>");
}
