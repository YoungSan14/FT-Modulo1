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
/*                CODIGO EN ESPAÑOL 
class BinarySearchTree{
   constructor(data, izquierda = null, derecha = null){
      this.data = data,
      this.izquierda = izquierda,
      this.derecha = derecha
   }

   size(){
      return cont();
   }

   insert(data){
      if (this.data > data){
         if(this.izquierda !== null){
            this.izquierda.insert(data);   
         }else{
            this.izquierda = new BinarySearchTree(data); 
            cont();
         }
      }
      if(this.data < data){
         if(this.derecha !== null){
            this.derecha.insert(data);   
         }else{
            this.derecha = new BinarySearchTree(data);
            cont();
         }
      }
   }
}
*/

class BinarySearchTree{
   constructor(value, left = null, right = null){
      this.value = value,
      this.left = left,
      this.right = right
   }

   size(){
      if(this.left === null && this.right === null) return 1;
      else if(this.left === null && this.right) return 1 + this.right.size();
      else if(this.right === null && this.left) return 1 + this.left.size();
      else if(this.left && this.right) return 1 + this.left.size() + this.right.size();     
   }

   insert(value){
      if (this.value > value){
         if(this.left !== null){
            this.left.insert(value);   
         }else{
            this.left = new BinarySearchTree(value); 
            // contador++;
            // cont();
         }
      }
      if(this.value < value){
         if(this.right !== null){
            this.right.insert(value);   
         }else{
            this.right = new BinarySearchTree(value);
            // contador++;
            // cont();
         }
      }
   }

   contains(value){
      if(value === this.value) return true;
      if(value < this.value){
         if(this.left === null){
            return false;
         }else{
            return this.left.contains(value);
         }
      }else{
         if(this.right === null){
            return false;
         }else{
            return this.right.contains(value);
         }
      }
   }

   depthFirstForEach(orden = "in-order"){}

   breadthFirstForEach(callback, array = []){
      if (this.left !== null){
         array.push(this.left);
      }
      if (this.right !== null){
         array.push(this.right);
      }

      callback(this.value)
      
      if(array.length > 0){
         let elemento = array.shift();
         elemento.breadthFirstForEach(callback, array);
      }
   }
}

// function contador(){
//    let count = 1;
//    return function(){
//       return count++;
//    }
// }
// let cont = contador(); 
let contador = 0;
let arbol = new BinarySearchTree(20);
arbol.insert(15)
arbol.insert(25)
arbol.insert(5)
arbol.insert(17)
arbol.insert(21)
arbol.insert(28)
arbol.insert(0)
console.log(arbol.size())
console.log(arbol.contains(20))


/*
arbol.insert(14);
arbol.insert(50);
arbol.insert(1);
arbol.insert(45);
arbol.insert(13);
arbol.insert(12);
arbol.insert(11);
console.log(arbol.izquierda.izquierda.derecha.izquierda.izquierda.izquierda.data);
// console.log(arbol.izquierda.izquierda.derecha)
console.log(arbol)
arbol.contains(3)
*/
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
