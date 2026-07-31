class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
        
  let maxLen=0
  let start= 0

  for(let end= 0;end<str.length;end++){
      for(let j= start;j<end;j++){
         if(str[j]===str[end]){
            // duplicate found
            start= j+1
            break
         }
      }
      maxLen= Math.max(maxLen,end-start+1)
  }
   return maxLen
   
    }
}
