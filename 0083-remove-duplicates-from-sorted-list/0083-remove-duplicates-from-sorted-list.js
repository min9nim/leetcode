/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cursor = head
    while(cursor){
        if(!cursor.next){
            break
        }
        if(cursor.val < cursor.next.val){
            cursor = cursor.next
        }else{
            cursor.next = cursor.next.next
        }
    }
    
    return head
};