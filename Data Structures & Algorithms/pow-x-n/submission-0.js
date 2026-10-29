class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let result = 1;
    let currentProduct = x;
    
    while (n > 0) {
        // If n is odd, multiply the current base into the result
        if (n % 2 === 1) {
            result *= currentProduct;
        }
        // Square the base and cut n in half
        currentProduct *= currentProduct;
        n = Math.floor(n / 2);
    }
    
    return result;
    }
}
