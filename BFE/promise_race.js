// https://bigfrontend.dev/problem/implement-Promise-race

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function race(promises) {
    // your code here
    return new Promise((res, rej) => {
      promises.forEach(promise => {
        promise.then(val => {
          res(val);
          return;
        }).catch(err => rej(err));
      });
    });
  }