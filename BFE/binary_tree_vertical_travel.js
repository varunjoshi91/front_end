// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }
// https://bigfrontend.dev/problem/binary-tree-vertical-traversal


/**
 * @param {Node} root
 * @returns {number[]}
 */
 function traverse(root) {
    // your code here
  
    let min = Infinity;
    let max = -Infinity;
    const map = new Map();
  
    const queue = [[root, 0]];
  
    while(queue.length) {
      let size = queue.length;
      
      while(size > 0) {
        const [node, idx] = queue.shift();
  
        if (map.has(idx)) {
          map.get(idx).push(node.value);
        } else {
          map.set(idx, [node.value]);
        }
  
        min = Math.min(min, idx);
        max = Math.max(max, idx);
  
        if (node.left) {
          queue.push([node.left, idx - 1]);
        }
  
        if (node.right) {
          queue.push([node.right, idx + 1]);
        }
  
        size--;
      }
      queue.sort((a, b) => a[1] - b[1]);
    }
    const length = max - min + 1;
    const result = new Array(length);
  
    for(const [rawIdx, val] of map.entries()) {
      result[rawIdx - min] = val;
    }
  
    return result.flat();
  }