'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function Node(dato){
  this.dato = dato;
  this.next = null;
} 

function LinkedList() {
  this.length = 0; 
  this.head = null;

  this.add = function(dato){
    let nuevoNodo = new Node(dato);
    let actual = this.head;

    if(actual === null){
      this.head = nuevoNodo;
      this.length++;
      return nuevoNodo;
    }

    while(actual.next !== null){
      actual = actual.next;
    }

    actual.next = nuevoNodo;
    this.length++
    return nuevoNodo;
  }

  this.remove = function(){
    let dato = null;
    let actual = this.head;
    
    if (this.length === 1){
      dato = actual.dato;
      this.head = null;
      this.length--;
      return dato;
    }else if(this.length > 1){  
      dato = actual.next.dato;
      while(actual.next.next !== null){
        actual = actual.next;
        dato = actual.next.dato;
      }
      actual.next = null;
      this.length--;
      return dato;
    }else{
      return null
    }
  }

  this.search = function(dato){
    if (!this.head) return null;
    let actual = this.head;
    while (actual) {
      if (actual.dato === dato) return actual.dato;
      else if (typeof dato === "function") { 
        if (dato(actual.dato)) return actual.dato;
      }
      actual = actual.next;
    }
    return null;
  }
}
// this.search = function(dato){
//   // if(dato()){
//   let actual = this.head;
//   if (actual.dato === dato){
//     return actual.dato;
//   }

//   while(actual.next !== null){
//     if(actual.dato === dato) return actual.dato; 
//     else if(typeof dato === 'function'){
//       if(dato(actual.dato)) return actual.dato;
//     }
//     actual = actual.next;  
//     // if(actual.dato === dato){
//     // return actual.dato;
//     // }
//   }
//   return null;
//   }

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.espacio = 35;
  this.coleccion = [];
  // {instructora: 'Ani'}, {saludo: 'Hola'}
  this.hash = function(string){
    let strArray = string.split('');
    let valoresNumericos = strArray.map(valor => valor.charCodeAt());
    let sumaDeLosValores = valoresNumericos.reduce((acum, valor) => (acum + valor));
  
    return sumaDeLosValores % this.espacio;
  }

  this.set = function(clave, valor){
    let posicion = this.hash(clave);
    if(!this.coleccion[posicion]){
      this.coleccion[posicion] = {};
    }
    this.coleccion[posicion][clave] = valor;
  }

  this.get = function(clave){
    let posicion = this.hash(clave);
    return this.coleccion[posicion][clave];
  }

  this.hasKey = function(clave){
    return this.coleccion.some(objeto => {
      if(objeto.hasOwnProperty(clave)) return true;
        return false;
    });
  }
}

let casilleros = new HashTable();
// console.log(casilleros.hash('foo'));
// console.log(casilleros.hasKey('saludo'));
// casilleros.set('foo', 'bar1')
// console.log(casilleros.get('foo'))
// casilleros.set('12', 'dose')
// casilleros.set('1', 'uno')
// console.log(casilleros.coleccion[9])

// console.log('1Alo1S'.split(''));
// console.log('hola'.charCodeAt(3));
// let array = [];

// array[12] = 'hola';
// console.log(array) 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
