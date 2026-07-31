class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
     
    function checkingPalindrome(str,left,right){
        while(left<right){
             if(str[left]!==str[right]){
                   return false
             }
             left++;
             right--
        }
      
        return true
    }

    let l=0
    let r= s.length-1
    while(l<r){
        if(s[l]!==s[r]){
            return checkingPalindrome(s,l+1,r) || checkingPalindrome(s,l,r-1)
        }
        l++
        r--
    }
    return true
}
}