// https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/NE0yNJ1rZy6

// Brute

let countChange = function(denominations, total) {
    function countChangeRec(denom, total, currentIndex) {

        // Base cases
        if (total === 0) {
            return 0; // there's only way, empty set
        }

        if (denom.length === 0 || currentIndex >= denom.length) {
            return Number.MAX_SAFE_INTEGER;
        }

        let ways1 = Number.MAX_SAFE_INTEGER;
        if (denom[currentIndex] <= total) {
            // Item is included
            const res = countChangeRec(denom, total - denom[currentIndex], currentIndex);

            if (res != Number.MAX_SAFE_INTEGER) {
                ways1 = res + 1;
            }
        }
        // Item is not included
        let ways2 = countChangeRec(denom, total, currentIndex + 1);

        return Math.min(ways1, ways2);

    }
    return countChangeRec(denominations, total, 0);
}

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);


// Memoization
let countChange = function(denominations, total) {
    let dp = [];
    function countChangeRec(denom, total, currentIndex) {

        // Base cases
        if (total === 0) {
            return 0; // there's only way, empty set
        }

        if (denom.length === 0 || currentIndex >= denom.length) {
            return Number.MAX_SAFE_INTEGER;
        }

        dp[currentIndex] = dp[currentIndex] || [];

        if (typeof dp[currentIndex][total] !== 'undefined') {
            return dp[currentIndex][total];
        }

        let ways1 = Number.MAX_SAFE_INTEGER;
        if (denom[currentIndex] <= total) {
            // Item is included
            const res = countChangeRec(denom, total - denom[currentIndex], currentIndex);

            if (res != Number.MAX_SAFE_INTEGER) {
                ways1 = res + 1;
            }
        }
        // Item is not included
        let ways2 = countChangeRec(denom, total, currentIndex + 1);

        dp[currentIndex][total] = Math.min(ways1, ways2);

        return dp[currentIndex][total];

    }
    return countChangeRec(denominations, total, 0);
}

// Bottoms up

let countChange = function(denominations, total) {
    const n = denominations.length;
    const dp = Array(n).fill(0).map(() => Array(total + 1).fill(0));

    for (let i = 0; i < n; i++) for (let j = 0; j <= total; j++) dp[i][j] = Number.MAX_VALUE;

    for(let i=0; i < n; i++) {
        dp[i][0] = 0;
    }

    for(let i = 0; i < n; i++) {
        for(let t = 1; t <= total; t++) {
            if (i > 0) {
                dp[i][t] = dp[i-1][t];
            }
            if (t >= denominations[i]) {
                dp[i][t] = Math.min(dp[i][t], dp[i][t-denominations[i]] + 1);
            }
        }
    }

    return dp[n-1][total];
}

console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);