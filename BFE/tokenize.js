// https://bigfrontend.dev/problem/create-a-tokenizer
/**
 * @param {string} str
 * @return {Generator}
 */
 function* tokenize(str) {
    // your code here
    // let tokens = str.match(/(\d+)|[\+\-\*\/\(\)]/g)
    let tokens = str.match(/(\d+)|[\*\+\-\/\)\(]/g)
    for(let token of tokens) {
      yield token;
    }
  }