/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let n1 = parseFloat(prompt(`Ingrese la longitud del lado A:`));
let n2 = parseFloat(prompt(`Ingrese la longitud del lado B:`));

function calcularPerimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
}
let perimetro = calcularPerimetro(n1, n2);

document.write(`El perímetro del rectángulo con lados ${n1} y ${n2} es: ${perimetro}`);

