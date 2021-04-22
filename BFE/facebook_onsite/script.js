
const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');

const getAllTextContent = (node, result, node2) => {
    if (!node) {
        return;
    }

    // find textNodes only
    for(const childNode of Array.from(node.childNodes)) {
        if (childNode.nodeType === Node.TEXT_NODE) {
            const text = childNode.textContent.trim();
            if (text && text.length > 0) {
                result.push(text);
            }
        }
    }

    let children = Array.from(node.children);
    const idxOfNode2 = children.indexOf(node2);
    if (idxOfNode2 > -1) {
        children.splice(idxOfNode2 + 1);
    }

    children.forEach(childNode => {
        getAllTextContent(childNode, result, node2);
    });
}

const getTextBetweenNodes = (node1, node2) => {
    /* 
        for given node
           - explore all children
        once done, pop, and explore next sibling again
        keep doing until node2 is reached
    */
    const result = [];

    getAllTextContent(node1, result, node2);

    let currentNode = node1;

    while(currentNode && currentNode !== node2) {
        const siblings = currentNode.parentNode && currentNode.parentNode.children.length ? Array.from(currentNode.parentNode.children): [];
        const currentIdx = siblings.indexOf(currentNode);

        // explore all siblings
        for(const childNode of siblings.slice(currentIdx + 1)) {
            getAllTextContent(childNode, result, node2);
        }
        currentNode = currentNode.parentNode;
    }

    return result;
}

console.log(getTextBetweenNodes(node1, node2));