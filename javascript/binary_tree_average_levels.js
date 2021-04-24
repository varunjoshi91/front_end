// https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/

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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    if (!root) {
        return 0;
    }
    const result = [];
    let queue = [root];
    
    while(queue.length) {
        let size = queue.length;
        let tempQueue = [];
        let sum = 0;
        while(queue.length) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                tempQueue.push(node.left);
            }
            if (node.right) {
                tempQueue.push(node.right);
            }
        }
        const average = sum / size;
        result.push(average);
        queue = [...tempQueue];
    }
    
    return result;
};