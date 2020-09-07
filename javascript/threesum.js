// https://www.algoexpert.io/questions/Three%20Number%20Sum
// https://www.algoexpert.io/questions/Three%20Number%20Sum

function threeNumberSum(array, targetSum) {
    let result = [];
    let sortedArray = array.sort((a,b) => a-b);
    for(let i = 0; i < sortedArray.length - 2; i++) {
        let left = i + 1;
        let right = sortedArray.length - 1;

        while(left < right) {
            let sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
            if (sum === targetSum) {
                result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
                left++;
                right--;
            } else if (sum < targetSum) {
                left++;
            } else if (sum > targetSum) {
                right--;
            }
        }
    }

    return result;
}
let input = [12,3,1,2,-6,5,-8,6];
console.log(threeNumberSum(input, 0));

let threeSum = function(nums) {
    if (!nums || nums.length < 3) {
        return [];
    }
    let result = [];
    nums.sort((a,b) => {
        return a-b;
    }); // [-2, -2, -2, -4, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
    
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) {
            return result;
        }
        if(nums[i] === nums[i-1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i] , nums[left] , nums[right]]);
                left++;
                right--;
                while(left < right && nums[left - 1] == nums[left]) {
                    left++;
                }
                while(left < right && nums[right + 1] == nums[right]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }

    return result;

};