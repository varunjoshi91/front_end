// https://bigfrontend.dev/problem/implement-String-prototype-trim
/**
 * @param {string} str
 * @return {string}
 */
 function trim(str) {
    let start = 0, end = str.length - 1;
    const reg = /\s/;
    while(reg.test(str[start])) {
      start++;
    }
  
    while(reg.test(str[end])) {
      end--;
    }
  
    return str.slice(start, end + 1);
  }


/**
 * @param {string} str
 * @return {string}
 */
function trim(str) {
    // your code here
    const regexp = /^\s+|\s+$/g;
    return str.replace(regexp, '');
  }