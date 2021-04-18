// https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 function findTwo(arr) {
    // your code here
    if (!arr || arr.length < 2) {
      return null;
    }
  
    let cache = {};
  
    for(let i = 0; i < arr.length; i++) {
      if (cache[0 - arr[i]] !== undefined) {
        return [cache[0 - arr[i]], i];
      }
      cache[arr[i]] = i;
    }
  
    return null;
  }