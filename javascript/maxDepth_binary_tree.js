/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let maxDepth = 0;
    let stack = [root];
    let tempStack = [];
    
    while(stack.length) {
        const currentNode = stack.pop();
        if (currentNode.left) {
            tempStack.push(currentNode.left);
        }
        if (currentNode.right) {
            tempStack.push(currentNode.right);
        }
        if (stack.length === 0) {
            maxDepth++;
            stack = tempStack;
            tempStack = [];
        }
    }
    
    return maxDepth;
};

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let maxDepth = 0;
    let queue = [root];
    
    while(queue.length) {
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const curr = queue.shift();
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        maxDepth++;
    }
    
    return maxDepth;
}


