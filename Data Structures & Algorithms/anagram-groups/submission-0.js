class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // edge case
    if(strs.length===1) return [strs]
    let map= {}
    for(const str of strs){
        const key= [...str].sort().join('')
        map[key]= map[key] ?[...map[key],str] : [str];
    }
    return Object.values(map)
    }
}
