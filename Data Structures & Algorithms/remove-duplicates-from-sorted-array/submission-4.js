class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length===0) return 0
        let l= 1
        for(let r=0;r<nums.length;r++){
        if(nums[r]!==nums[l-1]){
           nums[l]= nums[r]  
           l++
        }
        }
        return l
    }
}
