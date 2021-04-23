// https://bigfrontend.dev/problem/implement-Promise-prototype-finally

function myFinally(promise, onFinally) {
    // your code here
    return promise.then(val => {
      return Promise.resolve(onFinally()).then(() => val);
    }).catch(err => {
      return Promise.resolve(onFinally()).then(() => Promise.reject(err));
    });
  }