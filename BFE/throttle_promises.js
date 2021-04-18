// https://bigfrontend.dev/problem/throttle-Promises


/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
 function throttlePromises(funcs, max){
    // your code here
    let result = [];
    return new Promise((resolve, reject) => {
      let runningCount = 0;
      let queue = [...funcs];
      function run() {
        while (runningCount < max && queue.length) {
          const fn = queue.shift();
          runningCount++;
          fn().then(res => {
            result.push(res);
            runningCount--;
            run();
          }).catch(err => reject(err));
        }
        if (result.length === funcs.length) {
          resolve(result);
        }
      }
      run();
    });
  }