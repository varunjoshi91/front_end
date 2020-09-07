// https://www.algoexpert.io/questions/BST%20Traversal


function validateBst(tree, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!tree) {
        return true;
    }
    if (tree.value < min || tree.value >= max) {
        return false;
    }
    return validateBst(tree.left, min, tree.value)
            && validateBst(tree.right, tree.value, max);
}

// writeToPage(anagram('ab', 'abc'));
let input = [12,3,1,2,-6,5,-8,6];
// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));