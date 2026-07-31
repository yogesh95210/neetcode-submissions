class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
      for(let i=0;i<arr.length-1;i++){
            if(arr[i]===arr[i+1]){
                arr.splice(i+1,1)
                i--
            }
      }
      return arr.length
    }





}
