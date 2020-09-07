// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    for(let i=0; i < grid.length; i++) {
        for(let j=0; j < grid[i].length; j++) {
            if (grid[i][j] == '1') {
                maxArea = Math.max(maxArea, getAreaOfIsland(i, j, grid));
            }
        }
    }
    
    return maxArea;
  };
  
  let getAreaOfIsland = function(i, j, grid) {
    if (grid[i][j] == '1') {
        grid[i][j] = '*'; // to mark it visited
        let left = j > 0 ? getAreaOfIsland(i, j-1, grid) : 0;
        let right = j < grid[i].length - 1 ? getAreaOfIsland(i, j+1, grid) : 0;
        let top = i > 0 ? getAreaOfIsland(i-1, j, grid) : 0;
        let bottom = i < grid.length - 1 ? getAreaOfIsland(i+1, j, grid) : 0;
        return 1 + left + right + top + bottom;
    } else {
      return 0;
    }
  }