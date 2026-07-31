class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * racecar ---> racecar
     */
    isPalindrome(s) {
        let newStr= s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let resultString= "";

        for(let i= newStr.length-1;i>=0;i--){
            resultString= resultString + newStr[i]
        }
        return newStr===resultString
    }
}
