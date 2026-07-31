class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let result=[]

        for(let i=s.length-1;i>=0;i--){
            result.push(s[i])
        }

        for (let i = 0; i < s.length; i++) {
            s[i] = result[i];
        }
    }
}
