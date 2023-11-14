/* 7- Escriba un script que muestre la tabla de multiplicar de un 
número ingresado por pantalla, la creación de la tabla debe ser realizada
con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */
// const numeroIntroducido = parseFloat(prompt('Ingrese un numero:'));

// function tabla (numero){
// for(let i = 1; i <= 10; i++){
//     let resultado = numeroIntroducido * i;
//     document.write (`${numeroIntroducido} x ${i} = ${resultado}`)
// }
// }
let numero = parseFloat(prompt(`Ingrese un numero y se mostrara la tabla:`));

function calcularTabla (valorIntroducido) {
    document.write(`<h2>Tabla del ${numero} </h2>`)

    document.write('<ul>')
    for(let i = 1; i <= 10; i++){
        let resultado = valorIntroducido * i;
        document.write(`<li>${numero} x ${i} = ${resultado}</li>`);
    }
    document.write('</ul>')

}
let tabla = calcularTabla(numero);
