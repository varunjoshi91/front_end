// https://leetcode.com/problems/factor-combinations

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n, factor = 2) {
    let result = [];
    
    for(let i = factor; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            const nextVal = n / i; // 6
            result.push([i, nextVal]); // [2, 6]
            
            for(const arr of getFactors(nextVal, i)) {
                result.push([i, ...arr]);
            }
        }
    }
    
    return result;
};

// 6, 2