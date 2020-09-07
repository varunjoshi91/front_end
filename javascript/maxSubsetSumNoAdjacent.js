// https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

function maxSubsetSumNoAdjacent(array) {
    if (!array) {
        return false;
    }
    if (array.length === 1) {
        return array[0];
    }

    let maxSubArray = array.slice();
    
    maxSubArray[0] = array[0];
    maxSubArray[1] = Math.max(maxSubArray[0], array[1]);

    for(let i = 2; i < array.length; i++) {
        maxSubArray[i] = Math.max(maxSubArray[i-1], maxSubArray[i-2] + array[i]);
    }

    return maxSubArray[maxSubArray.length - 1];

}