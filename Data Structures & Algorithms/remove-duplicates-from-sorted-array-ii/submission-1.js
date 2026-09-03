class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length<=2) return nums.length

        let l=2
        for(let r=2; r<nums.length;r++){
            if(nums[r]!== nums[l-2]){
                nums[l]= nums[r]
                l++
            }
        }
        return l
    }
}
