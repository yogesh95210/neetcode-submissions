class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length===0) return ""
        let sorted= strs.sort()
        let first= sorted[0]
        let last = sorted[sorted.length-1]
        let i=0
        let res=""

        while(i<first.length && i< last.length){
            if(first[i]===last[i]){
                res+= first[i]
                i++
            }else{
                break
            }
        }
           return res
    }
}
