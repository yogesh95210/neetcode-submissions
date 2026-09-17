class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
         let heap = [];

    function push(item) {
        heap.push(item);

        let i = heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (heap[parent][0] >= heap[i][0]) {
                break;
            }

            [heap[parent], heap[i]] =
                [heap[i], heap[parent]];

            i = parent;
        }
    }

    function pop() {
        if (heap.length === 1) {
            return heap.pop();
        }

        let top = heap[0];
        heap[0] = heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (
                left < heap.length &&
                heap[left][0] > heap[largest][0]
            ) {
                largest = left;
            }

            if (
                right < heap.length &&
                heap[right][0] > heap[largest][0]
            ) {
                largest = right;
            }

            if (largest === i) {
                break;
            }

            [heap[i], heap[largest]] =
                [heap[largest], heap[i]];

            i = largest;
        }

        return top;
    }

    if (a > 0) push([a, "a"]);
    if (b > 0) push([b, "b"]);
    if (c > 0) push([c, "c"]);

    let result = "";

    while (heap.length > 0) {
        let [count, char] = pop();

        let n = result.length;

        // Agar same character last 2 positions par hai,
        // toh second-highest character use karo
        if (
            n >= 2 &&
            result[n - 1] === char &&
            result[n - 2] === char
        ) {
            if (heap.length === 0) {
                break;
            }

            let [secondCount, secondChar] = pop();

            result += secondChar;
            secondCount--;

            if (secondCount > 0) {
                push([secondCount, secondChar]);
            }

            push([count, char]);
        } else {
            result += char;
            count--;

            if (count > 0) {
                push([count, char]);
            }
        }
    }

    return result;

    }
}
