// https://www.algoexpert.io/questions/Smallest%20Difference

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne = arrayOne.sort((a,b) => a-b);
    arrayTwo = arrayTwo.sort((a,b) => a-b);

    let result = [];
    let smallest = Number.MAX_SAFE_INTEGER;

    let left = 0, right = 0;
    // debugger;
    while(left < arrayOne.length && right < arrayTwo.length) {
        let diff = Math.abs(arrayOne[left] - arrayTwo[right]);
        if (diff < smallest) {
            smallest = diff;
            result = [];
            result.push(arrayOne[left], arrayTwo[right]);
        }
        if (arrayOne[left] < arrayTwo[right]) {
            left++;
        } else {
            right++;
        }
    }

    return result;
}


// writeToPage(anagram('ab', 'abc'));
let input = [12,3,1,2,-6,5,-8,6];
// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
console.log(smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]));