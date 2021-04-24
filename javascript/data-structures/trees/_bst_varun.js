class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BST {
    constructor(node) {
        this.root = new Node(node);
    }

    insertIteratively(newVal) {
        let currNode = this.root;
        let parentNode = null;

        while(currNode) {
            parentNode = currNode;
            if (newVal < currNode.leftChild) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }

        if (newVal < parentNode.leftChild) {
            parentNode.leftChild = new Node(newVal);
        } else {
            parentNode.rightChild = new Node(newVal);
        }
    }

    insertRecursively(newVal) {
        if (this.root === null) {
            this.root = new Node(newVal);
            return;
        }
        this.insertRecursivelyHelper(this.root, newVal);
    }

    insertRecursivelyHelper(node, newVal) {
        if (!node) {
            node = new Node(newVal);
        } else if (newVal < node.val) {
            node.leftChild = this.insertRecursivelyHelper(node.leftChild, newVal);
        } else {
            node.rightChild = this.insertRecursivelyHelper(node.rightChild, newVal);
        }

        return node;
    }

    preOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        console.log(currNode);
        this.preOrderTraversal(currNode.leftChild);
        this.preOrderTraversal(currNode.rightChild);
    }

    inOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        this.preOrderTraversal(currNode.leftChild);
        console.log(currNode);
        this.preOrderTraversal(currNode.rightChild);
    }

    postOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        this.preOrderTraversal(currNode.leftChild);
        this.preOrderTraversal(currNode.rightChild);
        console.log(currNode);
    }

    search(newVal) {
        let currNode = this.root;
        while(currNode && currNode.val !== newVal) {
            if (newVal < currNode.val) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }
        if (currNode && currNode.val === newVal) {
            return currNode;
        } else {
            throw new Error('node not found');
        }
    }

    delete(currNode, val) {
        if (!currNode) {
            return false;
        }

        let parentNode = null;
        
        while(currNode && currNode.val !== val) {
            parentNode = currNode;
            if (val < currNode.val) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }

        if (!currNode) {
            return false;
        }

        // when its a leaf node
        if (!currNode.leftChild && !currNode.rightChild) {
            if (this.root.val === val) {
                this.root = null;
                return true;
            } else if (parentNode.leftChild === currNode) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        }

        // when it has a left child
        if (currNode.leftChild && !currNode.rightChild) {
            if (this.root.val === val) {
                this.root = currNode.leftChild;
                return true;
            } else if (parentNode.leftChild === currNode) {
                parentNode.leftChild = currNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currNode.leftChild;
                return true;
            }
        }

        // when it has a right child
        if (!currNode.leftChild && currNode.rightChild) {
            if (this.root.val === val) {
                this.root = currNode.rightChild;
                return true;
            } else if (parentNode.leftChild === currNode) {
                parentNode.leftChild = currNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currNode.rightChild;
                return true;
            }
        }

        // when it has both children
        if (currNode.leftChild && currNode.rightChild) {
            let minRight = currNode.rightChild;
            while (minRight.leftChild) {
                minRight = minRight.leftChild;
            }
            let temp = minRight;

            this.delete(this.root, minRight.val);
            currNode = temp;
            return true;
        }
    }
}