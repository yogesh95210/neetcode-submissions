class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(arr, k) {
        let l=0
        let zeroCount=0
       let maxLen= 0
       for(let r=0;r<arr.length;r++){
        if(arr[r]===0){
            zeroCount++
        }
        while(zeroCount>k){
            if(arr[l]===0){
                zeroCount--
            }
            l++
        }
        maxLen= Math.max(maxLen,r-l+1)
       }
       return maxLen
    }
}
