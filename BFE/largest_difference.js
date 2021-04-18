// https://bigfrontend.dev/problem/Find-the-largest-difference

/**
 * @param {number[]} arr
 * @return {number}
 */
 function largestDiff(arr) {
    // your code here
  
    if (!arr || arr.length < 2) {
      return 0;
    }
  
    let smallest = arr[0], biggest = arr[0];
  
    for(let i = 1; i < arr.length; i++) {
      const num = arr[i];
  
      if (num > biggest) {
        biggest = num;
      } else if (num < smallest) {
        smallest = num;
      }
    }
  
    return biggest - smallest;
  
    // const sortedArr = arr.sort((a,b) => a-b);
    // return sortedArr[sortedArr.length - 1] - sortedArr[0];
  }