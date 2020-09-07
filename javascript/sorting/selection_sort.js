// https://www.algoexpert.io/questions/Selection%20Sort
// O(n^2)

function selectionSort(array) {
    let current = 0;
    while (current < array.length) {
        let smallestIdx = current;
        for (let i = current; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        swap(smallestIdx, current, array);
        current += 1;
    }
    return array;
}

function swap(i, j , array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};