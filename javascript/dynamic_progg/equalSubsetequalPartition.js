// Brute force

let canPartition = function (num) {
    
    if (!num || num.length < 1) {
        return false;
    }

    let sum = 0;
    sum = num.reduce((a,b) => a+b);

    if (sum % 2 !== 0) {
        return false;
    }

    return canPartitionRecursive(num, sum/2, 0);
};

function canPartitionRecursive(array, sum, currentIndex) {
    if (sum === 0) {
        return true;
    }
    if (array.length === 0 || currentIndex >= array.length) {
        return false;
    }

    if (array[currentIndex] <= sum) {
        if (canPartitionRecursive(array, sum - array[currentIndex], currentIndex + 1)) {
            return true;
        }
    }

    return canPartitionRecursive(array, sum, currentIndex+1);
}

// Memoization Top Down

let canPartition = function (num) {
    
    if (!num || num.length < 1) {
        return false;
    }

    let sum = 0;
    sum = num.reduce((a,b) => a+b);

    if (sum % 2 !== 0) {
        return false;
    }

    const dp = [];

    return canPartitionRecursive(dp, num, sum/2, 0);
};

function canPartitionRecursive(dp, array, sum, currentIndex) {
    if (sum === 0) {
        return true;
    }
    if (array.length === 0 || currentIndex >= array.length) {
        return false;
    }

    dp[currentIndex] = dp[currentIndex] || [];

    if (typeof dp[currentIndex][sum] === 'undefined') {
        
        if (array[currentIndex] <= sum) {
            if (canPartitionRecursive(dp, array, sum - array[currentIndex], currentIndex + 1)) {
                dp[currentIndex][sum] = true;
                return true;
            }
        }
        dp[currentIndex][sum] = canPartitionRecursive(dp, array, sum, currentIndex+1);
    }

    return dp[currentIndex][sum];
}

// Bottoms up

let canPartition = function (num) {
    
    if (!num || num.length < 1) {
        return false;
    }

    let sum = 0;
    sum = num.reduce((a,b) => a+b);

    if (sum % 2 !== 0) {
        return false;
    }

    sum /= 2;

    const dp = Array(num.length)
                    .fill(false)
                    .map(() => Array(sum + 1).fill(false));
    
    for (let i = 0; i < num.length; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= sum; i++) {
        dp[0][i] = num[0] == i;
    }

    for (let i = 1; i < num.length; i++) {
        for (let s = 1; s <= sum; s++) {
            if (dp[i-1][s]) {
                dp[i][s] = dp[i-1][s];
            } else if (s >= num[i]) {
                dp[i][s] = dp[i-1][s-num[i]];
            }
        }
    }

    return dp[num.length-1][sum];
};