class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
         if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length, n = num2.length;
    const pos = new Array(m + n - 1).fill(0);
    
    // 1. Multiply all pairs without handling carries
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            pos[i + j] += (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
        }
    }
    
    // 2. Propagate carries from right to left
    let carry = 0;
    const res = [];
    for (let k = pos.length - 1; k >= 0; k--) {
        const total = pos[k] + carry;
        res.push(total % 10);
        carry = Math.floor(total / 10);
    }
    
    if (carry > 0) res.push(carry);
    return res.reverse().join("");

    }
}
