// https://leetcode.com/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
let summaryRanges = function(nums) {
    if (!nums || nums.length < 1) {
        return [];
    }
    let ranges = [];

    for(let i = 0; i < nums.length; i++) {
        let start = nums[i];
        let right = nums[i] + 1;
        let j = i + 1;

        if (right !== nums[j]) {
            ranges.push(String(start));
            continue;
        }
        while(right == nums[j]) {
            right++;
            j++;
        }
        i = j - 1;
        ranges.push(start.toString() + '->' + (right - 1).toString());
    }
    return ranges;
};