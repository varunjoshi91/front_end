// https://bigfrontend.dev/problem/implement-general-memoization-function
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
 function memo(func, resolver) {
    // your code here
    const cache = new Map();
  
    return function(...args) {
      let key = args.join('_');
      if (resolver) {
        key = resolver(...args);
      }
      let res = cache.get(key);
      if (res) {
        return res;
      }
      result = func.apply(this, args)
      cache.set(key, result);
      return result;
    }
  }