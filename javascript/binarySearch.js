// https://www.algoexpert.io/questions/Binary%20Search

// recursive O(logn) | O(logn)
function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length -1);
}

function binarySearchHelper(array, target, left, right) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left+right) / 2);
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return binarySearchHelper(array, target, left, mid - 1);
    } else {
        return binarySearchHelper(array, target, mid + 1, right);
    }
}

// iterative O(logn) | O(1)
function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length -1);
}

function binarySearchHelper(array, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left+right) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}