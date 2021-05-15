
// https://bigfrontend.dev/problem/implement-curry


/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    // your code here
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return curried.bind(this, ...args);
      }
    }
  }
  