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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
         class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(node) {
            this.heap.push(node);
            this.bubbleUp();
        }

        pop() {
            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            let min = this.heap[0];

            this.heap[0] = this.heap.pop();
            this.bubbleDown();

            return min;
        }

        bubbleUp() {
            let index = this.heap.length - 1;

            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);

                if (this.heap[parent].val <= this.heap[index].val) {
                    break;
                }

                [this.heap[parent], this.heap[index]] =
                    [this.heap[index], this.heap[parent]];

                index = parent;
            }
        }

        bubbleDown() {
            let index = 0;
            let n = this.heap.length;

            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;

                if (
                    left < n &&
                    this.heap[left].val < this.heap[smallest].val
                ) {
                    smallest = left;
                }

                if (
                    right < n &&
                    this.heap[right].val < this.heap[smallest].val
                ) {
                    smallest = right;
                }

                if (smallest === index) {
                    break;
                }

                [this.heap[index], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[index]];

                index = smallest;
            }
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }

    let heap = new MinHeap();

    // Har non-empty list ka first node heap mein add karo
    for (let list of lists) {
        if (list !== null) {
            heap.push(list);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (!heap.isEmpty()) {
        let node = heap.pop();

        current.next = node;
        current = current.next;

        // Popped node ka next node heap mein add karo
        if (node.next !== null) {
            heap.push(node.next);
        }
    }

    return dummy.next;

    }
}
