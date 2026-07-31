class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let maxArea=0
         let start=0
         let end=arr.length-1
         while(start<end){
            let area= Math.min(arr[start],arr[end]) *(end-start)
            maxArea= Math.max(maxArea,area)
            if(arr[start]<arr[end]){
                start++
            }else{
                end--
            }

         }
  return maxArea
    }
}
