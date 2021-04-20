// https://bigfrontend.dev/problem/implement-lodash-get/discuss?sort=time

/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  // your code here
  let segment = Array.isArray(path) ? path : path.match(/(\w)/gi);
  if (!segment || segment.length === 0) {
    return defaultValue;
  }
  let result = source;
  
  while(result && segment.length) {
    const prop = segment.shift();
    result = result[prop];
  }
  return result ? result : defaultValue;
}