// https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion

// please modify code below to make it work for large number like `fib(1000)`
// recursion should still be used

function fib(n){
    const sumArr = [0, 1];
    let count = 2;
  
    while(count <= n) {
      const sum = sumArr[0] + sumArr[1];
      sumArr[0] = sumArr[1];
      sumArr[1] = sum;
      count++;
    }
  
    return n > 1 ? sumArr[1] : sumArr[0];
  }