// https://bigfrontend.dev/problem/search-last-index-with-Binary-Search-possible-duplicate-array/discuss?sort=time

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target){
  // your code here
  if (!arr) {
    return -1;
  }

  let left = 0, right = arr.length - 1;

  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      let idx = mid;
      while(arr[idx] === target) {
        idx++;
      }
      return idx - 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}