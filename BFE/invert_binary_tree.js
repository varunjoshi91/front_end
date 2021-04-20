// https://bigfrontend.dev/problem/invert-a-binary-tree


// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }


/**
 * @param {Node} node
 * @returns {Node}
 */
 function invert(node) {
    // your code here
    if (!node) {
      return null;
    }
    const stack = [node];
  
    while(stack.length) {
      const poppedNode = stack.pop();
  
      [poppedNode.left, poppedNode.right] = [poppedNode.right, poppedNode.left];
  
      if (poppedNode.left) {
        stack.push(poppedNode.left);
      }
  
      if (poppedNode.right) {
        stack.push(poppedNode.right);
      }
    }
    return node;
  }