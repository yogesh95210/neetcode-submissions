class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
       
   function checkPalindrome(str){
     let tempString=""
    for(let i=str.length-1;i>=0;i--){
       tempString += str[i]
    }
    return tempString===str
   }

   // Step1   check directly first alraedy palindrome??

   if(checkPalindrome(s)) return true ;

   // step 2  try removing each character

   for(let i = 0; i < s.length; i++){
    let newString= s.slice(0,i) + s.slice(i+1)
    if(checkPalindrome(newString)) return true
   }
   return false
    }

}
