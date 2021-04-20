// https://bigfrontend.dev/problem/search-first-index-with-Binary-Search-duplicate-array


/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
 function firstIndex(arr, target){
    // your code here
    let left = 0, right = arr.length - 1;
  
    while(left <= right) {
      const mid = Math.floor((left + right)/2);
  
      if (arr[mid] === target) {
        let idx = mid;
  
        while(arr[idx] === target) {
          idx--;
        }
        return idx + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  