// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function(nums) {

    if (!nums || nums.length < 1) {
        return 0;
    }

    let longestLength = 0;
    let obj = {};

    nums.map(item => obj[item] = true);

    for(let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            continue;
        }
        obj[nums[i]] = false;
        let left = nums[i] - 1;
        let right = nums[i] + 1;
        let currentLength = 1;

        while(obj[left]) {
            obj[left] = false;
            currentLength += 1;
            left = left - 1;
        }

        while(obj[right]) {
            obj[right] = false;
            currentLength += 1;
            right = right + 1;
        }

        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }
    
    return longestLength;
};