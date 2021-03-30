// https://leetcode.com/problems/valid-triangle-number

/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
    if (!nums || nums.length < 3) {
        return 0;
    }
    let count = 0;
    nums.sort((a, b) => a-b);
    
    for(let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            continue;
        }
        let k = i + 2;
        for(let j = i + 1; j < nums.length - 1; j++) {
            while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }
    
    return count;
};