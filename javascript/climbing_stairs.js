// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const map = {};

    const climb_stairs = (i, n) => {
        if (i > n) {
            return 0;
        }
        if (i === n) {
            return 1;
        }
        if (map[i]) {
            return map[i];
        }
        map[i] = climb_stairs(i + 1, n) + climb_stairs(i + 2, n);
        return map[i];
    }
    return climb_stairs(0, n);
};

var climbStairs = function(n) {
    const arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};