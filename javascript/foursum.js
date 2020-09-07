let fourSum = function(nums, target) {
    if(!nums || nums.length < 4) {
        return [];
    }

    let result = [];
    nums.sort((a, b) => {
        return a-b;
    });

    for(let i=0; i<nums.length; i++) { //optimize
        for(let j=i+1; j < nums.length; j++) { //optimize
            let left = j + 1;
            let right = nums.length -1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push(
                        [nums[i], nums[j], nums[left], nums[right]]
                    );
                    left++;
                    right--;

                    while (left < right && nums[left - 1] == nums[left]) {
                        left++;
                    }
                    while (left < right && nums[right + 1] == nums[right]) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }

            while(j+1 < nums.length && nums[j] == nums[j+1]) {
                j++;
            }
        }
        while(i+1 < nums.length && nums[i] == nums[i+1]) {
            i++;
        }
    }

    return result;
};