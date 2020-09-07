let twoSum = function(nums, target) {

    let comp = {};

    for(let i=0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (comp[diff] >= 0) {
            return [comp[diff], i];
        } 
        comp[nums[i]] = i;
    }

    return [];
};