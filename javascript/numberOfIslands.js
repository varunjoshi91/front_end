// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function(grid) {
    let result = 0;

    let visited = grid.map(arr => arr.map(i => false));

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') {
                visited[i][j] = true;
            }
            if (visited[i][j]) {
                continue;
            }
            result += traverseIsland(i, j, grid, visited);
        }
    }
    
    return result;
};

let traverseIsland = function(i, j, grid, visited) {
    let stack = [[i, j]];

    while (stack.length) {
        let currNode = stack.pop();
        let i = currNode[0];
        let j = currNode[1];

        if (visited[i][j]) {
            continue;
        }
        visited[i][j] = true;

        if (grid[i][j] === '0') {
            continue;
        }

        let neighbors = getUnivistedNeighbors(i, j, grid, visited);
        neighbors.forEach((neighbor) => {
            stack.push(neighbor);
        });
    }

    return 1;
}

let getUnivistedNeighbors = function(i, j, grid, visited) {
    let univisitedNeighbors = [];
    
    if (i > 0 && !visited[i-1][j]) { // checking for left
        univisitedNeighbors.push([i-1, j]);
    }
    if (i < grid.length - 1 && !visited[i+1][j]) { // check for right
        univisitedNeighbors.push([i+1, j]);
    }
    if (j > 0 && !visited[i][j-1]) { // checking for above
        univisitedNeighbors.push([i, j-1]);
    }
    if (j < grid[i].length - 1 && !visited[i][j+1]) { // check for below
        univisitedNeighbors.push([i, j+1]);
    }

    return univisitedNeighbors;
}











/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var islands = 0;

    // find land pieces
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            if ('1' === grid[r][c]) {
                walk(grid, r, c);
                islands++;
            }
        }
    }

    return islands;
};

// do dfs walf and mark visited land pieces
function walk(grid, row, col) {
    if ('1' === grid[row][col]) {
        grid[row][col] = '*'; // mark land piece as visited
        /* left*/       if (col > 0) walk(grid, row, col - 1);
        /* right */     if (col < grid[row].length - 1) walk(grid, row, col + 1);
        /* top */       if (row > 0) walk(grid, row - 1, col);
        /* bottom */    if (row < grid.length - 1) walk(grid, row + 1, col);
    }
}