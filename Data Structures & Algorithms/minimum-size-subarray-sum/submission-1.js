class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, arr) {
        let minLen= Infinity
        let left=0
        let sum=0

        for(let right=0;right<arr.length;right++){
            sum+= arr[right]
            while(sum>=target){
              minLen= Math.min(minLen,right-left+1)
              sum-= arr[left]
                left++
            }
        }
        return minLen===Infinity? 0:minLen
    }
}
