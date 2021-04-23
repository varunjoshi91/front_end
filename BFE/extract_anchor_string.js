// https://bigfrontend.dev/problem/extract-all-anchor-elements-from-HTML-string
/**
 * @param {string} str
 * @return {string[]}
 */
 function extract(str) {
    // your code here
    const regexp = /<a(\s[^>]*)?>.*?<\s*\/\s*a>/g
    return str.match(regexp) ?? [];
  }