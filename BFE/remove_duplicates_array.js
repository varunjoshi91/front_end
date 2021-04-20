
// https://bigfrontend.dev/problem/remove-duplicates-from-an-array
/**
 * @param {any[]} arr
 */
 function deduplicate(arr) {
    // your code here
    if (!arr || !arr.length) {
      return null;
    }
    if (arr.length === 1) {
      return arr;
    }
    const visited = new Set();
    let i = 0;
  
    while (i < arr.length) {
      if (!visited.has(arr[i])) {
        visited.add(arr[i]);
        i++;
      } else {
        arr.splice(i, 1);
      }
    }
    return arr;
  }