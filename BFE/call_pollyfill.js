// https://bigfrontend.dev/problem/create-call-method


Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
    // return this.apply(thisArg, args);
    thisArg = thisArg ?? window;
    thisArg = Object(thisArg);
    let func = Symbol();
    thisArg[func] = this;
    let res = thisArg[func](...args);
    delete thisArg[func];
    return res;
  }
  