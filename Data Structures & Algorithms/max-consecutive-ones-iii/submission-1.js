class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(arr, k) {
        let maxLen=0
    let l=0;
    let r=0
    let zeros= 0

    while(r<arr.length){
        if(arr[r]===0) {
            zeros++
        }
        while(zeros>k){
            if(arr[l]===0){
                zeros--
            }
            l++
        }
        if(zeros<= k){
            maxLen= Math.max(maxLen,r-l+1)
        }
        r++
    }
   
    
    return maxLen
    }
}
