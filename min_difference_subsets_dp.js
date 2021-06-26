/* 
Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.

Input: {1, 2, 7, 1, 5}
Output: 0
Explanation: We can partition the given set into two subsets where the minimum absolute difference 
between the sum of numbers is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.

Input: {1, 3, 100, 4}
Output: 92
Explanation: We can partition the given set into two subsets where the minimum absolute difference 
between the sum of numbers is '92'. Here are the two subsets: {1, 3, 4} & {100}.
*/

// Brute force

const canPartition = (num) => {

    const canPartitionRec = (num, index, s1, s2) => {
        if (index === num.length) {
            return Math.abs(s1 - s2);
        }

        // diff1 where num[index] is included in s1
        const diff1 = canPartitionRec(num, index + 1, s1 + num[index], s2);
        const diff2 = canPartitionRec(num, index + 1, s1, s2 + num[index]);

        return Math.min(diff1, diff2);
    }

    return canPartitionRec(num, 0, 0, 0);
};

// Top down with memoization

const canPartition = (num) => {
    const dp = [];

    const canPartitionRec = (num, index, s1, s2) => {
        if (index === num.length) {
            return Math.abs(s1 - s2);
        }

        dp[index] = dp[index] || [];

        if (!dp[index][s1]) {
            // diff1 where num[index] is included in s1
            const diff1 = canPartitionRec(num, index + 1, s1 + num[index], s2);
            const diff2 = canPartitionRec(num, index + 1, s1, s2 + num[index]);

            dp[index][s1] = Math.min(diff1, diff2);
        }

        return dp[index][s1];
    }

    return canPartitionRec(num, 0, 0, 0);
};

// bottoms up

const canPartition = (num) => {
    const n = num.length;
    const sum = num.reduce((acc, curr) => acc + curr);
    const requiredSum = Math.floor(sum/2)
    const dp = Array(num).fill(false).map(() => Array(requiredSum + 1).fill(false));

    // when sum = 0, empty set 
    for(let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    // when one elem in the set, true only when elem === sum
    for(let s = 1; s <= requiredSum; s++) {
        dp[0][s] = num[0] === s;
    }

    for(let i = 1; i < n; i++) {
        for(let s = 1; s <= requiredSum; s++) {
            if (dp[i-1][s]) {
                dp[i][s] = dp[i - 1][s];
            } else if (s >= num[i]) {
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }

    let sum1 = 0;
    for(let i = requiredSum; i >= 0; i--) {
        if (dp[n-1][i]) {
            sum1 = i;
            break;
        }
    }

    const sum2 = sum - sum1;
    return Math.abs(sum1 - sum2);

}