class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x===0 || x===1) return x
        let i=1
        while(i*i<=x){
            i++
        }
        return i-1
            }
}
