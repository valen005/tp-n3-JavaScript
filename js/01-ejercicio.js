const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayor',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
console.log(meses.length);
 document.write('<h2>Lista de Meses</h2>');
 document.write('<ul>');
 for (let indiceMeses = 0; indiceMeses < meses.length; indiceMeses = indiceMeses + 1){
    document.write(`<li>${meses[indiceMeses]}</li>`);
 }
 
 
 document.write('</ul>');