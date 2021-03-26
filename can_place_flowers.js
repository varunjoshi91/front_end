// https://leetcode.com/problems/can-place-flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    // flowerbed = [1,0,1,0,0,1,0];
    if (!flowerbed[0] && (!flowerbed.length || !flowerbed[1])) {
        flowerbed[0]= 1;
        n--;
    }
    
    const size = flowerbed.length;
    
    if (!flowerbed[size - 1] && !flowerbed[size - 2]) {
        flowerbed[size - 1] = 1;
        n--;
    }

    let i = 2;
    while(i < flowerbed.length - 2) {
        if (!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
            flowerbed[i] = 1;
            n--;
            i++;
        }
        i++;
        
        if(n <= 0) {
            return true;
        }
    }

    return n<=0;
};