/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla 
el resultado devuelto por la función.
*/
function numeroDado(numero) {
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

const numeroEjemplo = numeroDado(5);
document.write (`${numeroEjemplo}`)