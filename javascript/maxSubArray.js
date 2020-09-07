let maxSubArray = function(nums) {
    if(!nums || nums.length < 1) {
        return [];
    }

    let max = nums[0];
    let prev = nums[0];
    for(let i = 1; i < nums.length; i++) {
        prev = Math.max(nums[i], prev + nums[i]);
        max = Math.max(prev, max);
    }
    return max;
};