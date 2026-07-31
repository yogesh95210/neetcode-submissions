class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
          let res = 0;
        const store = new Set(arr);

        for (let num of arr) {
            let count = 0,
                curr = num;
            while (store.has(curr)) {
                count++;
                curr++;
            }
            res = Math.max(res, count);
        }
        return res;
    }
}
