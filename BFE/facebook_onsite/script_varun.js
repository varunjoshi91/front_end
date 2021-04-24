/* 
QUESTION

Given two references to two DOM nodes, return the text between them.

Assume you have access to:

Node's children as an array: node.children
Node's parent: node.parentNode
Get text content of a node (naive approach): node.textContent
EXAMPLE

The output should be:

getTextBetweenNodes(node1, node2);
["On this Page", "Jump to section", "Properties", "Methods", "Examples", "Specifications", "Browser compatibility", "Related topics", "text that should be included",
"The ", "DOM", "Node", "Node", "Node", "Document", "Element", "DocumentFragment"]
 */

const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');

const getTextBetweenNodes = (node1, node2) => {
    const result = [];

    /* 
        explore node1

        loop over currentNode
          explore currentNode's sibling in a loop
          currentNode = parent
    
    */

    const exploreNode = (node) => {
        if (!node) {
            return;
        }
        for(let childNode of node.childNodes) {
            if (childNode.nodeType === Node.TEXT_NODE) {
                const text = childNode.textContent.trim();
                if (text && text.length > 0) {
                    result.push(text);
                }
            }
        }

        const children = Array.from(node.children);
        const idxOfNode2 = children.indexOf(node2);

        if (idxOfNode2 > -1) {
            children.slice(0, idxOfNode2 + 1).forEach(child => exploreNode(child));
        } else {
            children.forEach(child => exploreNode(child));
        }
    }

    exploreNode(node1);
    let currNode = node1;

    while(currNode) {
        let nextSibling = currNode.nextElementSibling;

        while(nextSibling) {
            exploreNode(nextSibling);
            nextSibling = nextSibling.nextElementSibling;
        }
        currNode = currNode.parentElement;
    }

    return result;
};

console.log(getTextBetweenNodes(node1, node2));