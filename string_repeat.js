/* 
    return new Array(count + 1).join(this);
*/

/* 

    const doubleString = this + this;
    iterations = count / 2;
    for 1 .. iterations
      result += doubleString
    
    if even ? result : result + this
       
*/


function repeatify(string, repetitions) {
    if (repetitions < 0 || repetitions === Infinity) {
       throw new RangeError('Invalid repetitions number');
    }
  
    const cache = new Map();
  
    function repeat(string, repetitions) {
       if (repetitions === 0) {
          return '';
       }
  
       const log = Math.floor(Math.log2(repetitions));
       let result;
  
       if (cache.has(log)) {
          result = cache.get(log);
       } else {
          result = string;
  
          for (let i = 1; i <= log; i++) {
             result += result;
             cache.set(i, result);
          }
       }
  
       const repetitionsProcessed = Math.pow(2, log);
       const repetitionsLeft = repetitions - repetitionsProcessed;
  
       return result + repeat(string, repetitionsLeft);
    }
  
    return repeat(string, repetitions);
 }

 /* Very optimized */

 function stringRepeat(str, num) {
   num = Number(num);

   var result = '';
   while (true) {
       if (num & 1) { // (1)
           result += str;
       }
       num >>>= 1; // (2)
       if (num <= 0) break;
       str += str;
   }

   return result;
}

function stringRepeat2(str, num) {
   let result = '';

   while(true) {
      if (num % 2) {
         result += str;
      }
      num = Math.floor(num/2);
      if (num <= 0) {
         break;
      }
      str += str;
   }
   return result;
}