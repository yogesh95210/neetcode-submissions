class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(arr) {
        let n = arr.length
    let sum1 = (n * (n+1))/2
    let sum2 =0
   for(let i=0; i<n;i++){
   sum2= arr[i] + sum2
   }
   return sum1-sum2
    }
}
