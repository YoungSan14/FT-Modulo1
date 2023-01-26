'use strict'
// No cambies los nombres de las funciones.

function factorear(num, array = [1], cont = 2){
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  while(num > 1){
    if (Number.isInteger(num/cont)) {
      num = num / cont;
      array.push(cont);
    }else{
      return factorear(num, array, cont + 1);
    }  
  }
  return array;
}

 function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let newArray = [array[0]];
  for(let i = 1; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i] > newArray[j]) newArray.push(array[i]);
        newArray.unshift(array[i])
    }
  }
  let newSet = new Set(newArray);
  newArray = [...newSet];
  return newArray;
}
// console.log(bubbleSort([5,6,4,3,2]))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
