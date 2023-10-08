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
var minDepth = function(root) {
  if(!root){
    return 0
  }
  let minDepth = 1
  let arr = [root]
  while(true){
    let nextArr = []
    for(let i=0; i<arr.length; i++){
      if(!arr[i].left && !arr[i].right){
        return minDepth
      }
      if(arr[i].left){
        nextArr.push(arr[i].left)
      }
      if(arr[i].right){
        nextArr.push(arr[i].right)
      }
    }
    minDepth++
    arr = nextArr
  } 
};