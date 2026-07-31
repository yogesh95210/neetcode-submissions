class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, arr) {

        let minLen= Infinity

         for(let i=0;i<arr.length;i++){
            let sum= 0
             for(let j=i;j<arr.length;j++){
              sum += arr[j]

              if(sum>= target){
                 minLen= Math.min(minLen,j-i+1)
                break
              }
             }
         }
         return minLen===Infinity ? 0: minLen
             }
}
