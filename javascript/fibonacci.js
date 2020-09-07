// https://www.algoexpert.io/questions/Nth%20Fibonacci

// Naive
// Time : O(2^n)
// Space: O(n)

function getNthFib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFib(n-1) + getNthFib(n-2);
    }
}

// Recursive, better than naive
// Time : O(n)
// Space: O(n)

function getNthFib(n) {
    const dict = {};
    dict[1] = 0;
    dict[2] = 1;
    return getNthFibHelper(n, dict);
}

function getNthFibHelper(n, dict) {
    if (dict[n] != null) {
        return dict[n];
    } else {
        dict[n] = getNthFibHelper(n-1, dict) + getNthFibHelper(n-2, dict);
        return dict[n];
    }
}

// Iterative
// Time : O(n)
// Space: O(1)

function getNthFib(n) {
    let sumArr = [0,1];
    let count = 2;

    while(count < n) {
        const sum = sumArr[0] + sumArr[1];
        sumArr[0] = sumArr[1];
        sumArr[1] = sum;
        count++;
    }

    return n > 1 ? sumArr[1] : sumArr[0];
}
