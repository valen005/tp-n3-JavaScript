/*5- Definir una función que muestre información sobre una cadena de texto que 
se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si
 esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

 const frase = prompt('Introduce una frase:')

 function analizarCadena(cadena) {
   
    if (cadena === cadena.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
        document.write("La cadena está formada solo por minúsculas.");
    } else {
        document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
}
let resultado = analizarCadena(frase);
