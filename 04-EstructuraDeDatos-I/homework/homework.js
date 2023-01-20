'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 1){
    return n;
  }else{
    return n * nFactorial(n - 1);
  }
}
// console.log(nFactorial(3));
// console.log(nFactorial(4));
// console.log(nFactorial(5));

function nFibonacci(n) {
  if (n <= 1){
    return n;
  }else{
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}
// console.log(nFibonacci(3))
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
class Queue{
  constructor(){
    this.elementos = [];
  }
  enqueue(valor){
    this.elementos.push(valor);
  }
  dequeue(){
    return this.elementos.shift();
  }
  size(){
    return this.elementos.length;
  }
}
// function Queue() {
//   this.elementos = []

//   this.enqueue = function(ingresa){
//     this.elementos.push(ingresa);
//   }
//   this.dequeue = function(){
//     // (this.elementos.length === 0) ? undefined : this.elementos.shift();  
//     if (this.elementos.length === 0){
//       return undefined;
//     }else{
//       return this.elementos.shift();
//     }
//   }
//   this.size = function(){
//     return this.elementos.length;
//   }
// }
// Queue.prototype.enqueue = function (ingresa){
//   this.elementos.push(ingresa);
// }
let cola = new Queue;
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
// cola.dequeue();
// cola.dequeue();
// cola.dequeue();
// cola.dequeue();
cola.size();
// console.log(cola)
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
