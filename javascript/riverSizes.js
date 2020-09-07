// https://www.algoexpert.io/questions/River%20Sizes

function riverSizes(matrix) {
    let result = [];
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
                result.push(getAreaOfRiver(matrix, row, col));
            }
        }
    }
    return result;
  }
  
  function getAreaOfRiver(matrix, row, col) {
    if (matrix[row][col] === 1) {
        matrix[row][col] = '*'; // marked it visited
        let left = col > 0 ? getAreaOfRiver(matrix, row, col - 1) : 0;
        let right = col < matrix[row].length - 1 ? getAreaOfRiver(matrix, row, col + 1) : 0;
        let top = row > 0 ? getAreaOfRiver(matrix, row - 1, col) : 0;
        let bottom = row < matrix.length - 1 ? getAreaOfRiver(matrix, row + 1, col) : 0;
        return 1 + left + right + top + bottom;
    } else {
        return 0;
    }
  }