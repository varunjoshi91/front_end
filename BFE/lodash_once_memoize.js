/**
 * @param {Function} func
 * @return {Function}
 */
 function once(func) {
    // your code here
    let result = null;
    let callCount = 0;
    return function(...arg) {
      if (result || callCount > 0) {
        return result;
      }
      callCount++;
      result = func.apply(this, arg);
      return result;
    }
  }