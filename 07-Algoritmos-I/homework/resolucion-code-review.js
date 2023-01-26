"use strict";
// No cambies los nombres de las funciones.
​
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
​
  let array = [1]; // Incluimos el 1 porque TODO num natural es divisible entre 1
  let divisor = 2;
  while (num !== 1) {
    if (num % divisor === 0) {
      // Si me da resto 0, puedo hacer la division
      array.push(divisor); // Agrego el 2 al array
      num = num / divisor; // 180 / 2 = 90
      // num/=divisor tambien funciona!
    } else {
      divisor++;
    }
  }
​
  return array;
​
  /*
  
    180 | 1
    180 | 2
    90  | 2
    45  | 3
    15  | 3
    5   | 5
    1   
​
    45 | 1
    45 | 3
    15 | 3
    5  | 5
    1  |
​
    77 | 1
    77 | 7
    11 | 11
    1
  
  */
}
​
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
​
  // Ordenamiento:
  // Iteramos comparando i vs i+1
  // Si debo ordenarlos, los cambio de posicion, y avanzo la i
  let change = true;
  while (change) {
    change = false;
​
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Hago el cambio
        let aux = array[i]; // 5
        array[i] = array[i + 1]; // 5>2
        array[i + 1] = aux;
        change = true;
      }
    }
  }
​
  return array; // Ordenado
}
​
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    // i comienza en 1 porque la posicion 0 la asumo como ordenada
    let x = i - 1;
    let aux = array[i];
    while (x >= 0 && array[x] > aux) {
      // Ciclo while para encontrar la posicion
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = aux; // Inserto el elemento
  }
​
  return array;
}
​
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let mininum = i; // Me guardo LA POSICION DONDE SE ENCUENTRA el minimo
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] < array[mininum]) {
        mininum = x;
      }
    }
​
    // Cambiar las posiciones con el minimo
    if (i !== mininum) {
      let aux = array[i]; // 10
      array[i] = array[mininum];
      array[mininum] = aux;
    }
  }
​
  return array;
​
  // [2,3,4,8,10]
  //        i
  //           x
  // min = pos4
}
