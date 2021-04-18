// https://bigfrontend.dev/problem/implement-lodash-chunk

/** 
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
 function chunk(items, size) {
    // your code here
    if (!items || !size || size.length < 1) {
      return [];
    }
    if (size === items.length) {
      return [items];
    }
    let result = [];
  
    while(items.length) {
      let tempArr = [];
      for(let i = 1; i <= size && items.length; i++) {
        tempArr.push(items.shift());
      }
      result.push(tempArr);
    }
  
    return result;
  }