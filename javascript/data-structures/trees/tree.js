class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = new Node(root);
    }

    insertIteratively(newVal) {
        let currNode = this.root;
        let parentNode = null;

        while(currNode) {
            parentNode = currNode;
            if (newVal < currNode.val) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }

        if (newVal < parentNode.val) {
            parentNode.leftChild = new Node(newVal);
        } else {
            parentNode.rightChild = new Node(newVal);
        }
    }

    insertRecursivly(newVal) {
        if (this.root === null) {
            this.root = new Node(newVal);
            return;
        }
        this.insertRecursivlyHelper(this.root, newVal);
    }

    insertRecursivlyHelper(currNode, newVal) {
        if (!currNode) {
            currNode = new Node(newVal);
        } else if (currNode.val < newVal) {
            currNode.leftChild = this.insertRecursivlyHelper(currNode.leftChild, newVal);
        } else {
            currNode.rightChild = this.insertRecursivlyHelper(currNode.rightChild, newVal);
        }
        return currNode;
    }

    preOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        console.log(currNode.val);
        this.preOrderTraversal(currNode.leftChild);
        this.preOrderTraversal(currNode.rightChild);
    }

    inOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        this.inOrderTraversal(currNode.leftChild);
        console.log(currNode.val);
        this.inOrderTraversal(currNode.rightChild);
    }

    postOrderTraversal(currNode) {
        if (!currNode) {
            return;
        }
        this.postOrderTraversal(currNode.leftChild);
        this.postOrderTraversal(currNode.rightChild);
        console.log(currNode.val);
    }

    search(val) {
        let currNode = this.root;
        while(currNode && currNode.val != val) {
            if (val < currNode.val) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }
        if (currNode.val === val) {
            return currNode;
        } else {
            throw new Error('not found');
        }
    }

    delete(currNode, val) {
        if (!currNode) {
            return false;
        }
        let parentNode = null;
        
        while (currNode && currNode.val !== val) {
            parentNode = currNode;
            if (val < currNode.leftChild) {
                currNode = currNode.leftChild;
            } else {
                currNode = currNode.rightChild;
            }
        }

        if (!currNode) {
            return false;
        }

        if (!currNode.leftChild && !currNode.rightChild) {
            if (currNode.val === this.root.val) {
                this.root = null;
                return true;
            }
            if (parentNode.leftChild = currNode) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        }

        if (currNode.leftChild && !currNode.rightChild) {
            if (currNode.val === this.root.val) {
                this.root = currNode.leftChild;
                return true;
            } else if (currNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currNode.leftChild;
            }
        }

        if (!currNode.leftChild && currNode.rightChild) {
            if (currNode.val === this.root.val) {
                this.root = currNode.rightChild;
                return true;
            } else if (currNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currNode.rightChild;
                return true;
            } else {
                return true;
                parentNode.rightChild = currNode.rightChild;
            }
        }


        if (currNode.leftChild && currNode.rightChild) {
            let minChild = currNode.rightChild;
            while (currNode != null) {
                currNode = currNode.leftChild;
            }
            let temp = currNode.val;
            this.delete(this.root, minChild.val);
            currNode.val = temp;
            return true;
        }

    }
}