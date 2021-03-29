// https://leetcode.com/problems/integer-to-english-words

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
    // num = 12345;
    
    if (num === 0) {
        return 'Zero';
    }
    
    const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];
    const TENS = ['', ...'Ten Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(' ')];
    const TEENS = ['', ...'Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(' ')];
    const ONES = ['', ...'One Two Three Four Five Six Seven Eight Nine Ten'.split(' ')];
    
    const twoDigitNumToString = (num) => {
        if (num <= 10) {
            return ONES[num];
        }
        if (num < 20) {
            return TEENS[num%10];
        }
        const word = [];
        // tens digit , units digit
        
        const unitsDigit = ONES[num%10];
        const tensDigit = TENS[Math.floor(num/10)];
        
        if (unitsDigit === 0) {
            return tensDigit.trim();
        } else {
            return `${tensDigit} ${unitsDigit}`.trim();
        }
    }
    
    const threeDigitNumToString = (num) => {
        const hundredthDigit = Math.floor(num/100);
        if (hundredthDigit === 0) {
            return `${twoDigitNumToString(num%100)}`.trim();    
        }
        return `${ONES[hundredthDigit]} Hundred ${twoDigitNumToString(num%100)}`.trim();
    }
    
    let position = 0;
    
    const numArr = num.toString().split('').map(i => +i);
    let result = '';

    while (numArr.length) {
        const num = numArr.length > 3 ? +numArr.splice(numArr.length - 3, 3).join('') : +numArr.splice(0, numArr.length).join('');
        const threeDigitSum = threeDigitNumToString(num).trim();
        if (!threeDigitSum) {
            position++;
            continue;
        }
        result = `${threeDigitNumToString(num)} ${THOUSANDS[position]} ${result}`;
        position++;
    }
    
    return result.trim();
    
};