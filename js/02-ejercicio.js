/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el 
usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = []; //arreglo
let ciudad;



document.write(`<h2>Arreglo ciudades</h2>`);
document.write("<ul>");

while ((ciudad = prompt("Ingrese el nombre de una ciudad:"))) {
    //mientras le pida al user una ciudad...
    
    ciudades.push(ciudad); //en mi array se van a ir juntando las ciudades introducidas
    document.write(`<li>Elemento: ${[ciudad]}</li>`);
}
// ciudades[1] = 'Barcelona';
// ciudades.push('París')
document.write("</ul>");

document.write(`El arreglo de ciudades tiene ${[ciudades.length]} elementos`);

document.write("<ul>");
document.write(`<li>Primera posición: ${ciudades[0]}</li>`);
document.write(`<li>Segunda posición: ${ciudades[1]}</li>`);
document.write(`<li>Tercera posición: ${ciudades[2]}</li>`);
document.write(`<li>Última posición: ${ciudades[ciudades.length - 1]}</li>`);
document.write("</ul>");
