class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(arr, k) {
        let count=0
    for(let i=0;i<arr.length;i++){
        let sum= 0
        for(let j=i;j<arr.length;j++){
             sum+= arr[j]
              if(sum===k){
               count++
        }
        }
       
    }
    return count
    }
}
