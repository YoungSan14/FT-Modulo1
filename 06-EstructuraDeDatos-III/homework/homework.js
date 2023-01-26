'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


function BinarySearchTree() {
   this.root = null;
   this._length = 0;

   this.size = function(){
      return this._length;
   }

   this.insert = function(valor){
      let nodo =  {
         valor: valor,
         izquierda: null,
         derecha: null
      }
      if(this.root === null) this.root = nodo;
      else if(nodo.valor < this.root.valor && !this.root.izquierda){

      }
   }

   this.contains = function(valor){
      function seEncuentra(valor, nodo){
         // if(nodo.valor === valor)
      }
   }

   this.depthFirstForEach = function(){}
}
// let arbol = new BinarySearchTree()
// arbol.insert(10)
// console.log(arbol)
// arbol.contains(3)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
