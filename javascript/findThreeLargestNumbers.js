// https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

function findThreeLargestNumbers(a) {
    let result = [null, null, null];
    
    for(let i =0; i < a.length; i++) {
        updateLargest(result, a[i]);
    }
    return result;
}

function updateLargest(result, num) {
    if (result[2] === null || num > result[2]) {
        fixupArray(result, num, 2);
    } else if (result[1] === null || num > result[1]) {
        fixupArray(result, num, 1);
    } else if (result[0] === null || num > result[0]) {
        fixupArray(result, num, 0);
    }
}

function fixupArray(result, num, idx) {
    for(let i =0; i <= idx; i++) {
        if (i === idx) {
            result[i] = num;
        } else {
            result[i] = result[i+1];
        }
    }
}