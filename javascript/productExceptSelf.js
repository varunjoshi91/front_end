let productExceptSelf = function(nums) {
    if(!nums && nums.length < 1) {
        return [];
    }

    let left = [], right = [], result = [];

    left[0] = 1;
    for(let i=0; i < nums.length - 1; i++) {
        left[i+1] = nums[i] * left[i];
    }
    
    right[nums.length -1] = 1;
    for(let j=nums.length-1; j >0; j--) {
        right[j-1] = nums[j] * right[j];
    }

    for(let i=0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }

    return result;  
};


// Optimized answer
var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (var j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};