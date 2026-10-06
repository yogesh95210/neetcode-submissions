class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr= s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let str="";
        for (let i= newStr.length-1; i>=0;i--){
            str= str+ newStr[i]
        }
        return newStr===str
    }
}
