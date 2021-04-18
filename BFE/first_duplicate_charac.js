// https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string

/**
 * @param {string} str
 * @return {string | null}
 */
 function firstDuplicate(str) {
    // your code here
    if (!str || str.length === 1) {
      return null;
    }
    let cache = {};
    for(let character of str.split('')) {
      if (cache[character]) {
        return character;
      } else {
        cache[character] = true;
      }
    }
    return null;
  }