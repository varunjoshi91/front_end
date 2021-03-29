// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    
    const thousandthDigit = Math.floor(num/1000);
    const hundredthDigit = Math.floor((num % 1000)/100);
    const tenthDigit = Math.floor((num % 100)/10);
    const unitDigit = num % 10;
    
    return thousands[thousandthDigit] + hundreds[hundredthDigit] + tens[tenthDigit] + ones[unitDigit];
    
    
    // return M[num/1000] + C[(num%1000)/100] + X[(num%100)/10] + I[num%10];
};

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];    
    const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    let result = '';

    for(let i = 0; i < values.length && num > 0; i++) {
        
        while(values[i] <= num) {
            num -= values[i];
            result += symbols[i];
        }
        
    }

    return result;
};