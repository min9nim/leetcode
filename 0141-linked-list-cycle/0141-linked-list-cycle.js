/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head){
        return false
    }
    let current = head
    let pos = 0
    while(true){
        if(!current.next){
            return false
        }
        if(current.pos !== undefined){
            return true
        }
        current.pos = pos
        pos++
        current = current.next
    }
    
};