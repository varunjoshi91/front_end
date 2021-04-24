// https://bigfrontend.dev/problem/get-DOM-tags/discuss?sort=time

/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
 function getTags(tree) {
    // your code here
    if (!tree) {
      return [];
    }
    const set = new Set();
  
    const stack = [tree];
  
    while(stack.length) {
      const node = stack.pop();
      set.add(node.tagName.toLowerCase());
      stack.push(...node.children);
    }
  
    return [...set];
  }