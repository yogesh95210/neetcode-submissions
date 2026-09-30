class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;

    for (let i = 0; i < 32; i++) {
        // Result ko left shift karo
        result = result << 1;

        // n ka last bit result mein add karo
        result = result | (n & 1);

        // n ko right shift karo
        n = n >>> 1;
    }

    return result >>> 0;
    }
}
