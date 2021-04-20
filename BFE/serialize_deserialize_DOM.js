// https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree

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

/**
 * @param {Node} root
 * @return {string}
 */
 function serialize(root) {
    // your code here
    if (!root) {
      return '';
    }
  
    let result = [];
    const queue = [root];
  
    while(queue.length) {
      const node = queue.shift();
      result.push(node ? node.value : null);
  
      if (node) {
        queue.push(node.left, node.right);
      }
    }
  
    return result.join(',');
  }
  
  /**
   * @param {string} str
   * @return {Node}
   */
  function deserialize(str) {
    // your code here
    if (!str || !str.length) {
      return null;
    }
  
    const nodeArr = str.split(',');
    let node = new Node(nodeArr.shift());
  
    let queue = [node];
    while(nodeArr.length) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      let left = nodeArr.shift();
      left = left ? new Node(left) : null;
      let right = nodeArr.shift();
      right = right ? new Node(right) : null;
      node.left = left;
      node.right = right;
      queue.push(left, right);
    }
    return node;
  }
  