/* 
Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

Input: {1, 1, 2, 3}, S=4
Output: 3
The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
Note that we have two similar sets {1, 3}, because we have two '1' in our input.

Input: {1, 2, 7, 1, 5}, S=9
Output: 3
The given set has '3' subsets whose sum is '9': {2, 7}, {1, 7, 1}, {1, 2, 1, 5}
*/

// Brute force
const countSubsets = (num, sum) => {
    const countSubsetsRec = (num, sum, index) => {
        if (sum === 0) {
            return 1;
        }
        if (index >= num.length) {
            return 0;
        }

        // recursive calls

        // if the num at index doesn't exceed sum, then include it
        let sum1 = 0;
        if (num[index] <= sum) {
            sum1 = countSubsetsRec(num, sum - num[index], index + 1);
        }

        // when current num is not included
        let sum2 = countSubsetsRec(num, sum, index + 1);

        return sum1 + sum2;
    }
    return countSubsetsRec(num, sum, 0);
}

// top down with memoization
const countSubsets = (num, sum) => {
    const dp = [];
    const countSubsetsRec = (num, sum, index) => {
        if (sum === 0) {
            return 1;
        }
        if (index >= num.length) {
            return 0;
        }

        dp[index] = dp[index] || [];

        // recursive calls

        if (!dp[index][sum]) {
            // if the num at index doesn't exceed sum, then include it
            let sum1 = 0;
            if (num[index] <= sum) {
                sum1 = countSubsetsRec(num, sum - num[index], index + 1);
            }
    
            // when current num is not included
            let sum2 = countSubsetsRec(num, sum, index + 1);
    
            dp[index][sum] = sum1 + sum2;
        }
        return dp[index][sum];
    }
    return countSubsetsRec(num, sum, 0);
}

// bottoms up

const countSubsets = (num, sum) => {
    const n = num.length;
    const dp = Array(n).fill(0).map(() => Array(sum + 1).fill(0));

    // when sum = 0, takes 1 way
    for(let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    // when 1 elem in the set, only when sum === elem
    for(let s = 1; s <= sum; s++) {
        if (num[0] === s) {
            dp[0][s] = 1;
        }
    }

    for(let i = 1; i < n; i++) {
        for(let s = 1; s <= sum; s++) {
            
            //exclude th enum
            dp[i][s] = dp[i - 1][s];

            // when num[i] is included, provided it's less than s
            if (num[i] <= s) {
                dp[i][s] += dp[i][s - num[i]];
            }
        }
    }

    return dp[n - 1][s];
}