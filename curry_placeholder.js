

// https://bigfrontend.dev/problem/implement-curry-with-placeholder



/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    // your code here
    return function curried(...args) {
      const expectedLengthOfArgs = fn.length;
      const areArgsEnough = args.length >= expectedLengthOfArgs
                              && args.slice(0, expectedLengthOfArgs).every(arg => arg !== curry.placeholder);
                
      if (areArgsEnough) {
        return fn.apply(this, args);
      } else {
        return function(...newArgs) {
          const finalArgs = [];
          let i = 0, j = 0;
  
          while(i < args.length && j < newArgs.length) {
            if (args[i] === curry.placeholder) {
              finalArgs.push(newArgs[j]);
              i++;
              j++;
            } else {
              finalArgs.push(args[i]);
              i++;
            }
          }
  
          while(i < args.length) {
            finalArgs.push(args[i]);
            i++;
          }
  
          while(j < newArgs.length) {
            finalArgs.push(newArgs[j]);
            j++;
          }
  
          return curried(...finalArgs);
  
        }
      }
    }
  
  }
  
  
  curry.placeholder = Symbol()
  
  
  