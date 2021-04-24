// https://bigfrontend.dev/problem/implement-Promise-any
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
    // your code here
    if (!promises || promises.length === 0) {
      return Promise.resolve([]);
    }
  
    return new Promise((res, rej) => {
      let errors = [];
      promises.forEach((promise, idx) => {
        Promise.resolve(promise)
          .then(val => {
            res(val);
          }).catch(err => {
            errors[idx] = err;
  
            if (errors.length >= promises.length) {
            rej(new AggregateError(
              'No Promise in Promise.any was resolved',
              errors
              ));
            }
          })
      })
    })
  }