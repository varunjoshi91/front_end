// https://bigfrontend.dev/problem/implement-Promise-all
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function all(promises) {

    if (!promises || promises.length === 0) {
      return Promise.resolve([]);
    }
  
    // your code here
    return new Promise((res, rej) => {
      let promisesCompleted = 0;
      let result = [];
      promises.forEach((promise, idx) => {
        Promise.resolve(promise).then(val => {
          promisesCompleted++;
          result[idx] = val;
  
          if (promisesCompleted >= promises.length) {
            res(result);
          }
        }).catch(err => rej(err));
      });
    });
  }