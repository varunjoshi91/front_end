function sum(...args) {
    return args.reduce((p, c) => p+c);
}

// using bind
let sumWithTwo = sum.bind(this, 2);
let sumWithThree = sumWithTwo.bind(this, 3);

// using arrow
let sumOfThreeNumbers = x => y => z => x+y+z;

console.log(sumWithThree(1));
console.log(sumOfThreeNumbers(3)(2)(1));









function sum(...args) {
    return args.reduce((p, c) => p + c);
}

currySum = (x) => {
    return (y) => {
        if (y) {
            return currySum(x+y);
        }
        return x;
    }
}

// es6 version
let sum = a => b => b ? sum(a + b) : a;

// console.log(sum(1,2,3,4,5));
console.log(currySum(5)(10)(50)());