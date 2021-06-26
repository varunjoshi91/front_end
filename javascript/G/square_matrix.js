const createSquare = (n) => {
    const result = Array(n).fill(0).map(() => Array(n).fill(0));
    let direction = 0;
    let value = 1;

    for(let column = 0; column < n; column++) {
        if (!direction) {
            let row = 0;
            while(row < n) {
                result[row][column] = value;
                value++;
                row++;
            }
            direction = 1;
        } else {
            let row = n - 1;
            while(row >= 0) {
                result[row][column] = value;
                value++;
                row--;
            }
            direction = 0;
        }
    }

    return result;
}

console.log(createSquare(3));