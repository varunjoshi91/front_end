// https://www.algoexpert.io/questions/Invert%20Binary%20Tree

function invertBinaryTree(tree) {
    if (!tree) {
        return;
    }
    swapChildren(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapChildren(node) {
    let right = node.right;
    node.right = node.left;
    node.left = right;
}