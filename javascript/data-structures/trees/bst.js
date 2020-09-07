// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
        if (!this.value) {
            this = new BST(value); //experimental
            return this;
        }

        let currNode = this;
        let parentNode = null;
        while(currNode != null) {
            parentNode = currNode;
            if (value < currNode) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }

        if (value < parentNode) {
            parentNode.left = new BST(value);
        } else {
            parentNode.right = new BST(value);
        }

        // Do not edit the return statement of this method.
        return this;
    }
  
    contains(value) {
        let currNode = this;
        while(currNode != null) {
            if (currNode.value === value) {
                return true;
            }
            if (value < currNode.value) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        return false;
    }
  
    remove(value) {
        let currNode = this;
        let parentNode = null;
        while(currNode != null) {
            parentNode = currNode;
            if (value < currNode.value) {
                currNode = currNode.left;
            } else if (value > currNode.value) {
                currNode = currNode.right;
            } else {
                // remove node from here
                this.removeHelper(currNode, parentNode);
                return this;
            }
        }
        return this;
    }

    removeHelper(node, parent) {
        let isLeftChild = parent.left == node;

        if (!node.left && !node.right) {
            // leaf node : so we need parent
            isLeftChild ? parent.left = null : parent.right = null;
        } else if (node.left && !node.right) {
            // has only left child
            isLeftChild ? parent.left = node.left : parent.right = node.left;
        } else if (!node.left && node.right) {
            // has only right child
            isLeftChild ? parent.right = node.right : parent.right = node.right;
        } else {
            // has both children
            let smallestFromRight = this.getMinNode(node);
            node.value = smallestFromRight;
            node.right.remove(smallestFromRight);

        }
        // node with just one child
    }

    getMinValue(node) {
        let currNode = node;
        while(currNode.left != null) {
            currNode = currNode.left;
        }
        return currNode.value;
    }
  }  