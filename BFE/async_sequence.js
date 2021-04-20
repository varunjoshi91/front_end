// https://bigfrontend.dev/problem/implement-async-helper-sequence

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
 function sequence(funcs){
    // your code here
    return function(callback, data) {
      let nextFunIndex = 0;
  
      const callNextFunc = (data) => {
        if (nextFunIndex === funcs.length) {
          callback(undefined, data);
          return;
        }
        const nextFunc = funcs[nextFunIndex];
        nextFunIndex++;
  
        nextFunc((error, newData) => {
          if (error) {
            callback(error, undefined);
          } else {
            callNextFunc(newData);
          }
        }, data);
      }
  
      callNextFunc(data);
  
    }
  }