class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
         let minLen= Infinity
     
     for(let i=0;i<nums.length;i++){
        let sum=0
        for(let j=i;j<nums.length;j++){
            sum=sum+ nums[j]

            if(sum>= target){
                minLen= Math.min(minLen, j-i+1)
                break;
            }
        }
     }
     if(minLen=== Infinity){
        return 0
     }else{
        return minLen
     }

    }
}
