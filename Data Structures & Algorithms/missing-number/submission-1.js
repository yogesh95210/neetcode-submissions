class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(arr) {
      let set = new Set(arr)
      let result 
        for(let i=0 ;i<=arr.length;i++){
            if(!set.has(i)){
                result= i
            }
        }
        return result
    }
}
