// https://bigfrontend.dev/problem/implement-Math-pow
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
 function pow(base, power){
    // your code here
    if (power === 0) {
      return 1;
    }
  
    if (power === 1) {
      return base;
    }
  
    const halfPower = Math.floor(power/2);
  
    const halfResult = power >= 0 ? pow(base, halfPower) : 1/pow(base, -halfPower);
  
    return power % 2 === 0 ? halfResult * halfResult : halfResult * halfResult * base;
  }