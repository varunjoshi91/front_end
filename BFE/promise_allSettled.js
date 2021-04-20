// https://bigfrontend.dev/problem/implement-Promise-allSettled


// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */

 function prepareAnswer(value, failed = false) {
    if (failed) {
      return {
        status: 'rejected',
        reason: value
      }
    }
    return {
      status: 'fulfilled',
      value: value
    }
  }
  
  function allSettled(promises) {
  
    if (!promises || !promises.length) {
      return Promise.resolve([]);
    }
  
    // your code here
    let result = [];
    let promisesCompleted = 0;
  
    return new Promise(res => {
      promises.forEach((promise, idx) => {
        Promise.resolve(promise).then(val => {
          result[idx] = prepareAnswer(val);
        }, err => {
          result[idx] = prepareAnswer(err, true);
        }).finally(() => {
          promisesCompleted++;
  
          if (promisesCompleted >= promises.length) {
            res(result);
          }
        })
      })
    });
  }
  
  