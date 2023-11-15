/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado 
de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */
let suma = 0
let resultados = []
let apariciones = []


for (let i = 0; i < 50; i = i + 1) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Dado 1: ${dado1}`);
  console.log(`Dado 2: ${dado2}`);

  suma = dado1 + dado2;
  console.log(suma);

  resultados [i] = suma
}
console.log(resultados)

document.write('<table>')

document.write('<tr>')
document.write('<th>Suma🎲</th>')
document.write('<th>Apariciones</th>')
document.write('</tr>')

for (let j = 0; j < 50; j = j + 1){
document.write('<tr>')
switch ([j]) {
  case '2':
    document.write('<th>2</th>')
    document.write(`<th>${resultado}</th>`)

}
document.write('</tr>')
}
document.write('</table>')

