/* console.log(document.getElementById('nodeA'));
console.log(document.getElementById('nodeB'));
console.log(document.getElementById('nodeB')); */


document.myGetElementById = (str) => {
    // console.log(this.document.body.children);

    let stack = [this.document.body];

    while(stack.length) {
        const node = stack.pop();
        if (node) {
            if (node.id === str) {
                return node;
            }
            stack.push(...node.children);
        }
    }

    return null;
}

/* console.log(document.myGetElementById('nodeA'));
console.log(document.myGetElementById('nodeB'));
console.log(document.myGetElementById('nodeB'));
 */
const matchQuery = (node, query) => {
    const id = query.includes('#') ? query.match(/(\w)+/d) : null;
    if (id) {
        return node.id === id;
    }
    let classNames = node.className && node.className.length ? node.className.split(' ') : [];
    if (classNames) {
        const queryClasses = query.split('.');
        return queryClasses.some(queriedClass => {
            return classNames.includes(queriedClass);
        });
    }
}

const walkTheDom = (root, result, query) => {
  if (!root) {
    return result;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node) {
      if (matchQuery(node, query)) {
        result.push(node);
      }
      stack.push(...node.children);
    }
  }

  return result;
};

document.myQuerySelector = (query) => {
    return document.myQuerySelectorAll(query)[0];
};

document.myQuerySelectorAll = (query) => {
    const result = [];
    walkTheDom(this.document.body, result, query);
    return result;
};

console.log(document.querySelectorAll('.text'));