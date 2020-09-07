// https://www.algoexpert.io/questions/Insertion%20Sort
// O(n^2)

function insertionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j-1]) {
            swap(j, j-1, array);
            j -=1;
        }
    }
    return array;
}

function swap(i, j , array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};