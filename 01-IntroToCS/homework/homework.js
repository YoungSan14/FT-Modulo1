'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   num = num.split('').reverse();
   for(let i = 0; i < num.length; i++){
      if (num[i] === '1'){
         decimal += 2 ** i;
      }
   }
   return decimal;
}

function DecimalABinario(num){
   let binario = [];
   while(num >= 1){
      binario.unshift(num % 2);
      num = Math.floor(num / 2);
   }
   return binario.join('');
}

// function DecimalABinario(num) {
//    let binario = '';
//    while(num > 0){
//       binario = (num % 2) + binario;
//       num = Math.floor(num/2);
//    }
//    return binario;
// }


// RECURSION
// function DecimalABinario(num){
//    if (num === 0){
//       return '';
//    }else{
//       let resto = num % 2;
//       return (DecimalABinario(Math.floor(num / 2)) + resto); 
//    }
// }



console.log(BinarioADecimal('1100101'))
console.log(DecimalABinario('101'))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
