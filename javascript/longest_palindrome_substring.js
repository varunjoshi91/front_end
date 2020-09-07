// brute Force

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {

    const dp = [];
  
    function longestPalindromeHelper(s, startIndex, endIndex) {
      // Base cases
      if (startIndex > endIndex) {
        return 0;
      }
  
      if (startIndex === endIndex) {
        return 1;
      }
  
      dp[startIndex] = dp[startIndex] || [];
  
      if (typeof dp[startIndex][endIndex] === 'undefined') {
        // Case 1:
  
        if (s[startIndex] === s[endIndex]) {
          // check if rest of string is palindrome
          let lengthOfLongest = longestPalindromeHelper(s, startIndex + 1, endIndex - 1);
          if ((endIndex - startIndex - 1) === lengthOfLongest) {
            dp[startIndex][endIndex] = lengthOfLongest + 2;
            return dp[startIndex][endIndex];
          }
        }
        // Case 2:
  
        let l1 = longestPalindromeHelper(s, startIndex + 1, endIndex);
        let l2 = longestPalindromeHelper(s, startIndex, endIndex - 1);
  
        dp[startIndex][endIndex] = Math.max(l1, l2);
      }
      return dp[startIndex][endIndex];
    }
  
    return longestPalindromeHelper(s, 0, s.length - 1);
      
  };