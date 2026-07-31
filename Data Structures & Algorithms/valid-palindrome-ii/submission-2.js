class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
      function isPalindrome(str){
      let l=0
      let r=str.length-1
      while(l<r){
        if(str[l]!==str[r]){
            return false
        }
        l++;
        r--;
      }
        return true
      }

   // step 1 
   if(isPalindrome(s)) return true ;

// step 2
 for(let i=0 ;i<s.length;i++){
    let newString= s.slice(0,i) + s.slice(i+1)
    if(isPalindrome(newString)) return true
   }
 return false
    }

}
