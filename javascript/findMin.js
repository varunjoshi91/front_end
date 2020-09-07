let findMin = function(nums) {
    if(!nums || nums.length < 1) {
        return;
    } else if (nums.length === 1) {
        return nums[0];
    }

    let left = 0, right = nums.length -1;
    if(nums[right] > nums[left]) {
        return nums[0];
    }

    while(left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        }
        
        if(nums[mid-1] > nums[mid]) {
            return nums[mid];
        }

        if(nums[left] < nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};