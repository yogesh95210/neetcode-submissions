class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(arr, k) {
        let maxLen=0

    for(let i=0;i<arr.length;i++){
        let zeros=0  
        for(let j=i;j<arr.length;j++){
             if(arr[j]===0){
                zeros++
             }if(zeros<=k){
                maxLen= Math.max(maxLen,j-i+1)
             }else{
               break
             }
             
          }
    }
    return maxLen
    }
}
