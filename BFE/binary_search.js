// https://bigfrontend.dev/problem/implement-Binary-Search-Unique
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
 function binarySearch(arr, target){
    // your code here
    if (!arr || arr.length === 0 || !target) {
      return -1;
    }
  
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left + 1;
      }
    }
  
    return -1;
  }
  