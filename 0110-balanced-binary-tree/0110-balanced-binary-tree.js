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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root){
        return true
    }
    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 
        && isBalanced(root.right)
        && isBalanced(root.left)
};

const getHeight = node => {
    if(!node){
        return 0
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}