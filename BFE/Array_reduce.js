// https://bigfrontend.dev/problem/implement-Array-prototype-reduce


Array.prototype.myReduce = function (...args) {
    const hasInitValue = args.length > 1;
    if (!hasInitValue && this.length === 0) {
      throw new Error();
    }
  
    let result = hasInitValue ? args[1] : this[0];
  
    for(let i = hasInitValue ? 0 : 1; i < this.length; i++) {
      result = args[0](result, this[i], i, this);
    }
    return result;
    // your code here
  }
  
  