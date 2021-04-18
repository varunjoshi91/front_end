// https://bigfrontend.dev/problem/decode-message

/**
 * @param {string[][]} message
 * @return {string}
 */
 function decode(message) {
    // your code here
    if (!message || !message.length || !message[0].length) {
      return '';
    }
    let result = '';
  
    let rows = message.length;
    let cols = message[0].length;
    let direction = 1;
    let row = 0, col = 0;
  
    while (col < cols && row > -1 && row < rows) {
      result += message[row][col];
      col++;
  
      row += direction; // to move the row in the right direction
  
      //edge cases
      if (row > rows - 1) {
        direction = -1;
        row -= 2;
      } else if (row < 0) {
        direction = 1;
        row += 2;
      }
    }
    
    return result;
  }