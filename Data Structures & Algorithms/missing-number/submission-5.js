class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum=0
        let n= nums.length
        let totalSum= (n*(n+1))/2
        for(let i=0;i<nums.length;i++){
             sum+=nums[i]
        }
        return totalSum-sum
    }
}
