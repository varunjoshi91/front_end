// https://www.algoexpert.io/questions/Quick%20Sort

function quickSort(array) {
    quickSortHelper(array, 0, array.length -1);
    return array;
}

function quickSortHelper(array, start, end) {
    if (start >= end) {
        return;
    }
    let pivot = start;
    let left = start + 1;
    let right = end;

    while (right >= left) {
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            swap(left, right, array);
        } else if (array[left] <= array[pivot]) {
            left += 1;
        } else if (array[right] >= array[pivot]) {
            right -= 1;
        }
    }
    swap(pivot, right, array);
    isLeftSubArraySmaller = end - (right + 1) > (right - 1) - start;
    if (isLeftSubArraySmaller) {
        quickSortHelper(array, start, right - 1);
        quickSortHelper(array, right + 1, end);
    } else {
        quickSortHelper(array, right + 1, end);
        quickSortHelper(array, start, right - 1);
    }
}

function swap(i, j , array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
