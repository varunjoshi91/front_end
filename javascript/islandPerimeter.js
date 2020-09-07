// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if (grid[row][col]) {
                perimeter += 4;

                if (col > 0 && grid[row][col-1]) {
                    perimeter--;
                }
                if (col < grid[row].length - 1 && grid[row][col+1]) {
                    perimeter--;
                }
                if (row > 0 && grid[row-1][col]) {
                    perimeter--;
                }
                if (row < grid.length - 1 && grid[row+1][col]) {
                    perimeter--;
                }
            }
        }
    }
    return perimeter;
};