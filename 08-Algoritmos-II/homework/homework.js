'use strict'
// No cambies los nombres de las funciones.

function quickSort(array, menores = [], mayores = []) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivote = array[0];
    for(let i = 1; i < array.length; i++){
      if(pivote > array[i]){
        menores.push(array[i]);
      }else{
        mayores.push(array[i]);
      }
    }
    if ((!menores.length || menores.length === 1) && (!mayores.length || mayores.length === 1)){
      return [...menores, pivote, ...mayores];
      // [...menores, pivote, ...mayores]
    }else if((menores.length === 0 || menores.length === 1)){
      return [...menores, pivote, ...quickSort(mayores)];
    }else if(mayores.length === 0 || mayores.length === 1){
      return [...quickSort(menores), pivote, ...mayores];
    }else{
      return [...quickSort(menores), pivote, ...quickSort(mayores)];
      // quickSort(menores).concat(pivote, quickSort(mayores))
      // [...quickSort(menores), pivote, ...quickSort(mayores)]
    }
}
// console.log(quickSort([5,10,4,8,2,19]))
// console.log(quickSort([9,2,20,13,85,3,9,25,1,4]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length === 1) return array;
  let mitad = divide(array);
  let izq = mitad[0];
  let der = mitad[1];

  return combinarArrays(quickSort(izq), quickSort(der));
  // return [...mergeSort(izq), ...mergeSort(der)];
}

function divide(array){
  let izq = [], der = [];
  let mitad = Math.floor(array.length / 2)
  for (let i = 0; i < mitad; i++){
    izq.push(array[i]);
  }
  for (let j = mitad; j < array.length; j++){
    der.push(array[j]);
  }
  return [izq, der];
}

function combinarArrays(izq, der){
  let newArray = [];
  let i = 0
  let j = 0;
  while(i < izq.length && j < der.length){
    if(izq[i] < der[j]){
      newArray.push(izq[i]);
      i++;
    }else{
      newArray.push(der[j]);
      j++;
    }
  }
  // return newArray.concat(izq.slice(i)).concat(der.slice(j));
  return [...newArray, ...izq.slice(i), ...der.slice(j)];
}
console.log(mergeSort([5,10,4,8,2,19,7]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
