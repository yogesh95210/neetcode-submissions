class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        for(let i=0; i<nums.length-1;i++){
            if(nums[i]===nums[i+1] && nums[i]===nums[i+2]){
                nums.splice(i+2,1)
                i--
            }
        }
        return nums.length
    }
}
