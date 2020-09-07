let containsDuplicate = function(nums) {
    if (!nums) {
        return false;
    }
    let i = 0, utilSet = new Set();
    while(i < nums.length) {
        if (utilSet.has(nums[i])) {
            return true;
        }
        utilSet.add(nums[i++]);
    }
    return false;
};