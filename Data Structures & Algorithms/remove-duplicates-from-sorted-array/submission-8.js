class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
         let newSet= [... new Set(nums)]

    for(let i=0; i<newSet.length;i++){
        nums[i]=newSet[i]
    }
    return newSet.length
    }
}
