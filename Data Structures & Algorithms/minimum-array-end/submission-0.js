class Solution {
    /**
     * @param {number} n
     * @param {number} x
     * @return {number}
     */
    minEnd(n, x) {
        let result = BigInt(x);
    let remaining = BigInt(n - 1);
    let bit = 1n;

    while (remaining > 0n) {
        if ((result & bit) === 0n) {
            if ((remaining & 1n) === 1n) {
                result |= bit;
            }
            remaining >>= 1n;
        }
        bit <<= 1n;
    }

    return Number(result);
    }
}
