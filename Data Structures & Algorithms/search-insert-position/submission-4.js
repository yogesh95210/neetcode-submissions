class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(arr, target) {
          for(let i=0;i<arr.length;i++){
        if(arr[i]>=target){
            return i
        }
    }
    return arr.length
    }
}
