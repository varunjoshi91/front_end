// https://leetcode.com/problems/find-leaves-of-binary-tree/

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
 * @return {number[][]}
 */
 var findLeaves = function(root) {
    const result = [];
    
    const dfs = (node, res) => {
        if (!node) {
            return null;
        }
        if (!node.left && !node.right) {
            res.push(node.val);
            return null;
        }
        node.left = dfs(node.left, res);
        node.right = dfs(node.right, res);
        return node;
    }
    
    while(root) {
        const leaves = [];
        root = dfs(root, leaves);
        result.push(leaves);
    }
    
    return result;
};