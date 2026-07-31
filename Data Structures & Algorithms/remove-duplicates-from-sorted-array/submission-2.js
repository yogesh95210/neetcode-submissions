class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
     let l=0
     let r=1

     while(r<arr.length){
        if(arr[l]!==arr[r]){
            l++
            r++
        }else if(arr[l]==arr[r]){
            arr.splice(r,1)
        }
     }
     return arr.length
    }





}
