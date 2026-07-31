/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

    while (current !== null) {
        let nextNode = current.next; // save next
        current.next = prev;         // reverse link
        prev = current;              // move prev forward
        current = nextNode;          // move current forward
    }

    return prev;
    }
}
