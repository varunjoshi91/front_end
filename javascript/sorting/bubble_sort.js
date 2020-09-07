// https://www.algoexpert.io/questions/Bubble%20Sort
// Time: O(n^2)

function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;

    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < (array.length - 1 - counter); i++) {
            if (array[i] > array[i+1]) {
                swap(i, i+1, array);
                isSorted = false;
            }
        }
        counter++;
    }

    return array;
}

function swap(i, j , array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};