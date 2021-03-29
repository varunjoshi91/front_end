// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanSymbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    const strArr = s.split('');
    let sum = romanSymbols[strArr[strArr.length - 1]];
    
    for(let i = strArr.length - 2; i > -1; i--) {
        const currentNum = romanSymbols[strArr[i]];
        const previousNum = romanSymbols[strArr[i + 1]];
      if (currentNum >= previousNum) {
          sum += romanSymbols[strArr[i]];
      } else {
          sum -= romanSymbols[strArr[i]];
      }
    }
    return sum;
};