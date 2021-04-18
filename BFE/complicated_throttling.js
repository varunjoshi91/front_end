// https://bigfrontend.dev/problem/implement-basic-throttle


/**
 * @param {Function} func
 * @param {number} wait
 */
 function throttle(func, wait) {
    // your code here
    let waiting = false;
    let lastArg;
    return function() {
      if (!waiting) {
        waiting = true;
        func.apply(this, arguments);
        setTimeout(() => {
          waiting = false;
          if (lastArg) {
            func.apply(this, lastArg);
          }
        }, wait)
      } else {
        lastArg = [...arguments];
      }
    }
  }