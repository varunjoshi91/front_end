// https://bigfrontend.dev/problem/implement-Math-sqrt
// https://leetcode.com/problems/sqrtx/submissions/

/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
  // your code here

  if (typeof x !== "number" || x < 0 || Number.isNaN(x)) {
    return NaN;
  }

  if (!Number.isFinite(x)) {
    return x;
  }

  if (x < 2) {
    return x;
  }

  let mid = x;
  let left = 0,
    right = x;

  while (right > left) {
      // below condition for 100000
    if (right - left === 1) {
      return left;
    }
    mid = Math.floor((right + left) / 2);
    if (mid > x / mid) {
      right = mid;
    } else if (mid < x / mid) {
      left = mid;
    } else {
      return mid;
    }
  }
}
