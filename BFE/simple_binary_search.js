// https://bigfrontend.dev/problem/implement-Binary-Search-Unique
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
 function binarySearch(arr, target){
    // your code here
    if (!arr) {
      return -1;
    }
  
    let left = 0, right = arr.length - 1;
  
    while(left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return -1;
  }
  