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
       if (!head) return null;

  let stack = [];
  let current = head;

  // Step 1: Push all nodes into stack
  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  // Step 2: Pop from stack and rebuild list
  let newHead = stack.pop();
  current = newHead;

  while (stack.length > 0) {
    current.next = stack.pop();
    current = current.next;
  }

  // Step 3: Last node ka next null
  current.next = null;

  return newHead;
}
}