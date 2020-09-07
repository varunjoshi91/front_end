// https://www.algoexpert.io/questions/Largest%20Range

function largestRange(array) {
    if (!array || array.length < 1) {
        return [];
    }
    let bestRange = [];
    let longestLength = 0;

    let obj = {};
    array.map(item => obj[item] = true);

    for(let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            continue;
        }
        obj[array[i]] = false;
        let left = array[i] - 1;
        let right = array[i] + 1;
        let currentLength = 1;

        while(obj[left]) {
            obj[left] = false;
            currentLength += 1;
            left = left - 1;
        }
        while(obj[right]) {
            obj[right] = false;
            currentLength += 1;
            right = right + 1;
        }

        if (currentLength > longestLength) {
            longestLength = currentLength;
            bestRange = [left + 1, right - 1];
        }

    }

    return bestRange;
}