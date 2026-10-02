class Solution {
    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    rangeBitwiseAnd(left, right) {
         let shift = 0;

    while (left !== right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }

    return left << shift;
    }
}
