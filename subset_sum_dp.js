/* 
Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.

Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}

Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'.

*/


// Brute force
const canPartition = function (num, sum) {

    /* 
      for each element in num
       * include elem + recursively find sum - elem
       * not include elem : recursively find sum
    */

    if (sum === 0) {
        return true;
    }

    return canPartitionRec(num, sum, 0);
};

const canPartitionRec = function (num, sum, index) {
    if (sum === 0) {
        return true;
    }
    if (!num.length || index >= num.length) {
        return false;
    }

    if (num[index] <= sum) {
        if (canPartitionRec(num, sum - num[index], index + 1)) {
            return true;
        }
    }

    return canPartitionRec(num, sum, index + 1);
}


// Bottoms up

const canPartition = function (num, sum) {
    const n = num.length;
    const dp = Array(n).fill(false).map(() => Array(sum + 1).fill(false));

    // When sum is 0, empty set
    for(let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    // with only one number, true only when number is = sum
    for(let s = 1; s <= sum; s++) {
        dp[0][s] = num[0] === s;
    }

    // process all subsets for all sums

    for(let i = 1; i < n; i++) {
        for(let s = 1; s <= sum; s++) {
            // get sum s without including current number at i
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i-1][s];
            } // get sum s - num[i] after including current number at i
            else if (dp[i-1][s-num[i]]) {
                dp[i][s] = dp[i-1][s-num[i]];
            }

        }
    }
    return dp[n - 1][sum];
};