// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = function(nums) {
    if (!nums || nums.length < 1) {
        return -1;
    }
    if (nums.length === 1) {
        return 0;
    }
   let largest = nums[0];
   let largestIndex = 0;
   let secondLargest = Number.MIN_SAFE_INTEGER;

   for(let i = 1; i < nums.length; i++) {
       if (largest < nums[i]) {
           secondLargest = largest;
           largest = nums[i];
           largestIndex = i;
       } else if (secondLargest < nums[i]) {
           secondLargest = nums[i];
       }
   }

   if (secondLargest*2 <= largest) {
       return largestIndex;
   } else {
       return -1;
   }
};