class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {
        let set= new Set(arr)
   if(set.size!==arr.length){
    return true
   }
   return false
    }
}
