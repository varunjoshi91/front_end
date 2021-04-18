// https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays

/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
 function intersect(arr1, arr2) {
    // your code here
    if (!arr1 || !arr2) {
      return [];
    }
    const result = [];
    let p1 = 0;
    let p2 = 0;
  
    while(p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
        result.push(arr1[p1]);
        p1++;
        p2++;
      } else {
        if (arr1[p1] < arr2[p2]) {
          p1++;
        } else {
          p2++;
        }
      }
    }
  
    return result;
  }