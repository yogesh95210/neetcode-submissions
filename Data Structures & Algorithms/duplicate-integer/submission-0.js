class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         let set = new Set()
    for(let i=0; i< nums.length;i++){
    set.add(nums[i])   
    }
   if(nums.length==set.size){
      return false
   }else{
    return true
   }
    }
}
