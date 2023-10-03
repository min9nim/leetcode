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
var isSymmetric = function(root) {
    let [left, right] = [[root.left], [root.right]]

    while(true){
        let [nextLeft, nextRight] = [[], []]

        if(left.length !== right.length){
            return false
        }
        for(let i=0; i<left.length; i++){
            if(left[i] === null && right[i] !== null){
                return false
            }
            if(right[i] === null && left[i] !== null){
                return false
            }
            if(right[i] !== null && left[i] !== null){
                if(right[i].val !== left[i].val){
                    return false
                }
                if(left[i].right || left[i].left || right[i].right || right[i].left){
                    nextLeft.push(left[i].left, left[i].right)
                    nextRight.push(right[i].right, right[i].left)
                }
            }
        }
        if(nextLeft.length === 0){
            return true
        }else{
            left = nextLeft
            right = nextRight
        }
    }
};
