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
    if(!root){
        return 0
    }
    let depth = 1
    let nodes = [root]
    while(true){
        const newNodes = []
        for(let i=0; i<nodes.length; i++){
            if(nodes[i].left){
                newNodes.push(nodes[i].left)
            }
            if(nodes[i].right){
                newNodes.push(nodes[i].right)
            }
        }
        if(newNodes.length > 0){
            depth++
            nodes = newNodes
        }else{
            return depth
        }

    }
    
};