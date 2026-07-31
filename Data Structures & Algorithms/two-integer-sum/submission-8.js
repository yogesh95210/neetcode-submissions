class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     let map= new Map()
   let n= nums.length
       for (let i = 0; i < n; i++) {
            const temp= target- nums[i]
            if(map.has(temp)){
                return [map.get(temp),i]
            }
            map.set(nums[i],i)
       }
return null
     }
}
