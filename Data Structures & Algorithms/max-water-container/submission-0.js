class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let maxArea=0
   for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length;j++){
           let area= Math.min(arr[i],arr[j]) * (j-i)
          maxArea= Math.max(area,maxArea)
       }
   }
  return maxArea
    }
}
