class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if(nums.length===0) return 0
    const sorted= [...new Set(nums)].sort((a,b)=>a-b)
    let maxLen=1;
    let currLen=1
    for(let i=1; i<sorted.length;i++){
      if(sorted[i]===sorted[i-1]+1){
        currLen++
        maxLen= Math.max(maxLen,currLen)
      }else{
        currLen=1
      }
    }
    return maxLen
    }
}
