// https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/gx763A3x9Pl

// Brute force

let countChange = function(denominations, total) {
    function countChangeRec(denom, total, currentIndex) {

        // Base cases
        if (total === 0) {
            return 1; // there's only way, empty set
        }

        if (denom.length === 0 || currentIndex >= denom.length) {
            return 0;
        }

        let ways1 = 0;
        if (denom[currentIndex] <= total) {
            // Item is included
            ways1 = countChangeRec(denom, total - denom[currentIndex], currentIndex);
        }
        // Item is not included
        let ways2 = countChangeRec(denom, total, currentIndex + 1);

        return ways1 + ways2;

    }
    return countChangeRec(denominations, total, 0);
}

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);

// Memoization

let countChange = function(denominations, total) {
    let dp = [];
    function countChangeRec(denom, total, currentIndex) {

        // Base cases
        if (total === 0) {
            return 1; // there's only way, empty set
        }

        if (denom.length === 0 || currentIndex >= denom.length) {
            return 0;
        }

        dp[currentIndex] = dp[currentIndex] || [];

        if (typeof dp[currentIndex][total] !== 'undefined') {
            return dp[currentIndex][total];
        }

        let ways1 = 0;
        if (denom[currentIndex] <= total) {
            // Item is included
            ways1 = countChangeRec(denom, total - denom[currentIndex], currentIndex);
        }
        // Item is not included
        let ways2 = countChangeRec(denom, total, currentIndex + 1);

        dp[currentIndex][total] = ways1 + ways2;

        return dp[currentIndex][total];

    }
    return countChangeRec(denominations, total, 0);
}

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);

// Bottom's up

let countChange = function(denominations, total) {
    const n = denominations.length;
    const dp = Array(n).fill(0).map(() => Array(total + 1).fill(0));

    for(let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }

    for(let i = 0; i < n; i++) {
        for (let t = 1; t <= total; t++) {
            if (i > 0) {
                dp[i][t] = dp[i - 1][t];
            }
            if (t >= denominations[i]) {
                dp[i][t] += dp[i][t-denominations[i]];
            }
        }
    }

    return dp[n-1][total];
}

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 5)}`);