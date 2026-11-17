class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length, n = num2.length;
    const res = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = mul + res[p2];
            
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
        }
    }
    
    // Skip leading zero if present
    let start = 0;
    while (start < res.length && res[start] === 0) {
        start++;
    }
    
    return res.slice(start).join("");
    }
}
