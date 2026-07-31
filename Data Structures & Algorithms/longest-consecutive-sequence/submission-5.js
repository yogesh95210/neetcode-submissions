class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
        if(arr.length===0) return 0
    let set = new Set(arr)
    let longest=1

for(let num of set){
    if(set.has(num+1)){
        let len=1
        while(set.has(num+len)){
            len++
        }
        longest= Math.max(longest,len)
    }
}
return longest
    }
}
