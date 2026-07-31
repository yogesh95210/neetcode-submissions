class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * racecar ---> racecar
     */
    isPalindrome(s) {
         let newStr= s.toLowerCase().replace(/[^a-z0-9]/g,"")
       let l=0
       let r= newStr.length-1

       while(l<r){
        if(newStr[l]!==newStr[r]){
            return false
        }
        l++;
        r--
       }
       return true
    }
}
