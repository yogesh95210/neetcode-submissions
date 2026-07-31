class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result= ""
    let maxLen= Math.max(word1.length,word2.length)

    for (let i=0; i<maxLen;i++){
        if(i<word1.length){
             result= result+ word1[i]
        }if(i<word2.length){
            result= result+ word2[i]
        }
    }
    return result
    }
}
