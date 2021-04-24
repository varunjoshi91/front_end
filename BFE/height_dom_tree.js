// https://bigfrontend.dev/problem/get-DOM-tree-height
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
 function getHeight(tree) {
    // your code here
    let height = 0;
    if (!tree) {
      return height;
    }
    let queue = [tree];
    while(queue.length) {
      let size = queue.length;
      height++;
      while(size > 0) {
        const elem = queue.shift();
        queue.push(...elem.children);
        size--;
      }
    }
    return height;
  }



/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
    // your code here
    let maxHeight = 0;
  
    if (!tree) {
      return maxHeight;
    }
  
    for(let child of tree.children) {
      maxHeight = Math.max(maxHeight, getHeight(child));
    }
  
    return maxHeight + 1;
  }