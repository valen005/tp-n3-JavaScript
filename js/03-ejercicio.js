/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado 
de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2= Math.floor(Math.random() * 6) + 1;

console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);

const suma = dado1 + dado2
console.log (suma)
