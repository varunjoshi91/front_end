// https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree/discuss?sort=time

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // your code here

  const getIdxOfNode = (node) => {
    const parent = node.parentElement;
    return Array.from(parent.children).indexOf(node);
  }

  const getPath = (root, target) => {
    let path = [];

    while(target !== root) {
      const idx = getIdxOfNode(target);
      path.push(idx);
      target = target.parentElement;
    }

    return path;
  }

  const walkPath = (root, path) => {
    while(path.length) {
      root = root.children[path.pop()];
    }
    return root;
  }

  let path = getPath(rootA, target);
  return walkPath(rootB, path);
}

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
    const stackA = [rootA]
    const stackB = [rootB]
  
    while (stackA.length > 0) {
      const topA = stackA.pop()
      const topB = stackB.pop()
  
      if (topA === target) return topB
  
      stackA.push(...topA.children)
      stackB.push(...topB.children)
    }
  
    return null
  }