// https://bigfrontend.dev/problem/create-your-own-new-operator
/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
 const myNew = (constructor, ...args) => {
    // your code here
    const obj = Object.create(constructor.prototype);
    const ret = constructor.apply(obj, args);
    return ret !== undefined ? ret : obj;
  }
  
  // let a = {}.Person();