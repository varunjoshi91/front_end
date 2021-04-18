// https://bigfrontend.dev/problem/implement-basic-debounce
/**
 * @param {Function} func
 * @param {number} wait
 */
 function debounce(func, wait) {
    // your code here
    let timeoutId;
  
    return function(...args) {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        func.call(this, ...args);
      }, wait);
    }
  }