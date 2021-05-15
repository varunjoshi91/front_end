// https://bigfrontend.dev/problem/Traverse-DOM-level-by-level

/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
 function flatten(root) {
    // your code here
    if (!root) {
      return [];
    }
    let queue = [root];
    let result = [];
  
    while (queue.length) {
      const elem = queue.shift();
      const children = Array.from(elem.children);
      if (children && children.length) {
        children.forEach(child => queue.push(child));
      }
      result.push(elem);
    }
  
    return result;
  }


  function flatten(root) {
    let result = [];
    if (!root) {
      return result;
    }

    let queue = [root];

    while(queue.length) {
      const elem = queue.shift();
      result.push(elem);
      for(let child of elem.children) {
        queue.push(child);
      }
    }

    return result;
  }