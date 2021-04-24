// https://bigfrontend.dev/problem/search-element-right-before-target-with-Binary-Search-possible-duplicate-array/discuss?sort=time

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target){
  // your code here
  // your code here
  if (!arr) {
    return undefined;
  }

  let left = 0, right = arr.length - 1;

  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      let idx = mid;
      while(arr[idx] === target) {
        idx--;
      }
      return arr[idx];
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return undefined;
}