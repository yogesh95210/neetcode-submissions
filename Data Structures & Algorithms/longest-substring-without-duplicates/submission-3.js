class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
        
  let maxLen=0
   for(let i=0;i<str.length;i++){
    let temp= ""
       for(let j=i; j<str.length;j++){
         if(temp.indexOf(str[j])!==-1){
            break;
         }
          temp= temp+ str[j]
          maxLen= Math.max(maxLen,temp.length)

       }
   }
   return maxLen
    }
}
