// https://bigfrontend.dev/problem/Next-Right-Sibiling

const node1 = document.getElementById("button");
const node2 = document.getElementById("anchor");

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */

/* function nextRightSibling(root, target) {
  if (!root) {
      return null;
  }
  const queue = [root, null];
  while(queue.length) {
      const node = queue.shift();
      if (node === target) {
          return queue.shift();
      } else if (node === null && queue.length) {
          queue.push(null);
      } else {
          queue.push(...node.children);
      }
  }
  return null;
} */

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  if (target.nextElementSibling) {
    return target.nextElementSibling;
  }

  const explore = (node, depth) => {
    if (!node) {
      return;
    }
    if (depth === 0) {
      return node;
    }
    for (let child of node.children) {
      const node = explore(child, depth - 1);
      if (node) {
        return node;
      }
    }
  };

  let depth = 1;
  let parent = target.parentElement;

  while (parent) {
    let nextSibling = parent.nextElementSibling;

    while (nextSibling) {
      const nodeFound = explore(nextSibling, depth);
      if (nodeFound) {
        return nodeFound;
      }
      nextSibling = nextSibling.nextElementSibling;
    }

    parent = parent.parentElement;
    depth++;
  }

  return null;
}

console.log(nextRightSibling(node1) === node2);
