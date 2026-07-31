class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(arr, k) {
         let pointer=0
   for(let i=0;i<arr.length;i++){
    if(arr[i]!==k){
       arr[pointer]=arr[i]
       pointer++
   }
}
return pointer 
    }
}
