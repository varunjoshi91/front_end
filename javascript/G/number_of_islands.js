/**
 * @param {character[][]} grid
 * @return {number}
 */

 const getUnvisitedNeighbors = (i, j, grid, visited) => {
     let unvisitedNeighbors = [];

     // check left
     if (i > 0 && !visited[i - 1][j]) {
         unvisitedNeighbors.push([i - 1, j]);
     }
     // check right
     if (i < grid.length - 1 && !visited[i + 1][j]) {
         unvisitedNeighbors.push([i + 1, j]);
     }
     // check top
     if (j > 0 && !visited[i][j-1]) {
        unvisitedNeighbors.push([i, j - 1]);
     }
     // check bottom
     if (j < grid[i].length - 1 && !visited[i][j+1]) {
        unvisitedNeighbors.push([i, j + 1]);
     }

     return unvisitedNeighbors;
 };

const traverseIsland = (i, j, grid, visited) => {
    const stack = [[i, j]];

    while(stack.length) {
        let [x, y] = stack.pop();
        if (visited[x][y]) {
            continue;
        }
        visited[x][y] = true;

        if (grid[x][y] === '0') {
            continue;
        }

        stack.push(...getUnvisitedNeighbors(x, y, grid, visited));
    }

    return 1;
}

let numIslands = function (grid) {
    let numOfIslands = 0;
    let visited = grid.map(row => row.map(elem => false));

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; i < grid[i].length; j++) {
            if (grid[i][j] === '0') {
                visited[i][j] = true;
            }
            if (visited[i][j]) {
                continue;
            }
            numOfIslands += traverseIsland(i, j, grid, visited);
        }
    }

    return numOfIslands;
};

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

  console.log(numIslands(grid));