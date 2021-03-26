// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

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
var findSecondMinimumValue = function(root) {
    
    const dfs = (node, unique) => {
        if (node) {
            unique[node.val] = true;
            dfs(node.left, unique);
            dfs(node.right, unique);
        }
    }
    
    const unique = {};
    dfs(root, unique);
    let secondMin = Infinity;
    
    for(let i of Object.keys(unique)) {
        secondMin = (+i !== root.val) && (+i < secondMin) ? i : secondMin;
    }
    
    if (secondMin !== Infinity && secondMin !== root.val) {
        return secondMin;
    } else {
        return -1;
    }
    
};